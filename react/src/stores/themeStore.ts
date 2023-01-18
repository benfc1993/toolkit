import { createContextStore } from "../Examples/stores/Context/store/createContextStore";

export const {
  ContextStoreProvider: ThemeStoreProvider,
  useContextStore: useThemeStore,
} = createContextStore({ theme: "dark" }, "theme");
