import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { useThemeStore } from "./stores/themeStore";
import "./theme.scss";
import "./App.scss";

function App() {
  const { data } = useThemeStore();
  return (
    <div className={`App theme--${data.theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
