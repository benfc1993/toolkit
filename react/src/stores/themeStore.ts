import {
  createContextStore,
  useStore,
} from "../Examples/stores/Context/store/createContextStore";

export const {
  ContextStoreProvider: ThemeStoreProvider,
  useContextStore: useThemeStore,
} = createContextStore(() =>
  useStore<{ theme: "dark" | "default" }>({ theme: "dark" }, "theme")
);
