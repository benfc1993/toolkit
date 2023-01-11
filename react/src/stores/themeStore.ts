import { createContextStore } from "../Tools/stores/Context/store/createContextStore";

type ThemeStoreType = {
  theme: "dark" | "default";
};

export const {
  ContextStoreProvider: ThemeStoreProvider,
  useContextStore: useThemeStore,
} = createContextStore<ThemeStoreType>({ theme: "dark" }, "theme");
