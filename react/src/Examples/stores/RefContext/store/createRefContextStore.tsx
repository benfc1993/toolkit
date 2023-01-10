import React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";

export interface IContextStore<Store> {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
}

/**
 * Store using Ref
 *
 * This store will only cause re-renders to the subscribed components.
 * The subscriber will also only be notified if the partial of the state denoted by the passed selector is updated.
 *
 * @param initialState: This is the blank stae and will also inform the type for the data structure
 * @param persistanceKey: if passed state will store in localStorage under that key and loaded as initial state
 */

export const createRefContextStore = <Store,>(
  initialState: Store,
  persistanceKey?: string
) => {
  const useContextStoreData = (): IContextStore<Store> => {
    if (persistanceKey) {
      try {
        initialState =
          (JSON.parse(localStorage.getItem(persistanceKey)!) as Store) ||
          initialState;
      } catch {}
    }

    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      if (persistanceKey)
        localStorage.setItem(persistanceKey, JSON.stringify(store.current));
      subscribers.current.forEach((subscriber) => subscriber());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  };

  type UseContextStoreDataReturnType = ReturnType<typeof useContextStoreData>;

  const StoreContext = createContext<UseContextStoreDataReturnType | null>(
    null
  );

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
      <StoreContext.Provider value={useContextStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  };

  //React >= 18
  const useStore = <SelectorOutput,>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (value: Partial<Store>) => void] => {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("store not found");
    }

    const state = useSyncExternalStore(store.subscribe, () =>
      selector(store.get())
    );
    return [state, store.set];
  };

  //React < 18
  //   const useStore = <SelectorOutput,>(
  //     selector: (store: Store) => SelectorOutput
  //   ): [SelectorOutput, (value: Partial<Store>) => void] => {
  //     const store = useContext(StoreContext);
  //     if (!store) {
  //       throw new Error("store not found");
  //     }

  //     const [state, setState] = useState(selector(store.get()));

  //     useEffect(() => {
  //       return store.subscribe(() => setState(selector(store.get())));
  //     }, [store, selector]);

  //     return [state, store.set];
  //   };

  return { Provider, useStore };
};
