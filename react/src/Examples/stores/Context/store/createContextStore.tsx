import React, { useState } from "react";

export const useStore = <Store,>(
  initialState: Store,
  persistanceKey?: string
) => {
  if (persistanceKey) {
    try {
      initialState =
        (JSON.parse(localStorage.getItem(persistanceKey)!) as Store) ||
        initialState;
    } catch {}
  }

  const [data, setData] = useState<Store>(initialState);

  return {
    data,
    set: (data: Partial<Store>) => {
      setData((prevState) => {
        if (persistanceKey)
          localStorage.setItem(
            persistanceKey,
            JSON.stringify({ ...prevState, ...data })
          );
        return { ...prevState, ...data };
      });
    },
  };
};

export const createContextStore = <T,>(useStore: () => T) => {
  const Context = React.createContext<T | null>(null);

  const useContextStore = () => React.useContext(Context)!;

  const ContextStoreProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => <Context.Provider value={useStore()}>{children}</Context.Provider>;

  return { ContextStoreProvider, useContextStore };
};
