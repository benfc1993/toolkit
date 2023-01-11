/**
 * Middleware hook to handle toggle theme state
 */

import { useThemeStore } from "../../stores/themeStore";

export const useToggleTheme = () => {
  const { data, set } = useThemeStore();

  const toggleTheme = () =>
    set({ theme: data.theme === "dark" ? "default" : "dark" });

  return toggleTheme;
};
