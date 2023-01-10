import React, { useState } from "react";

/**
 * Store using Context
 *
 * @param initialState: This is the blank stae and will also inform the type for the data structure
 * @param persistanceKey: if passed state will store in localStorage under that key and loaded as initial state
 *
 */

type StoreType<Store extends object> = {
  data: Store;
  set: (data: Partial<Store>) => void;
};

export const useStore = <Store extends object>(
  initialState: Store,
  persistanceKey?: string
): StoreType<Store> => {
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

/**
 * Store using Context
 *
 * This store will cause re-renders for all components nexted in the Provider component.
 *
 */

export const createContextStore = <T extends object>(
  initial: T,
  persistanceKey?: string
) => {
  const Context = React.createContext<StoreType<T> | null>(null);

  const useContextStore = () => React.useContext(Context)!;

  const ContextStoreProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <Context.Provider value={useStore(initial, persistanceKey)}>
      {children}
    </Context.Provider>
  );

  return { ContextStoreProvider, useContextStore };
};
