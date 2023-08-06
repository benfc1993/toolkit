import { createContextStore } from "../export/stores/createContextStore";

export const {
  ContextStoreProvider: ThemeStoreProvider,
  useContextStore: useThemeStore,
} = createContextStore({ theme: "dark" }, "theme");
