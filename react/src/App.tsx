import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { useThemeStore } from "./stores/themeStore";
import "./theme.scss";
import "./App.scss";
import { useHoverTooltip } from "./Tools/hooks/useTooltip";

function App() {
  const { data } = useThemeStore();
  return (
    <div className={`App theme--${data.theme}`}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr" }}>
        {Array.from({ length: 100 }).map((_, idx) => {
          return <Tooltip key={idx} />;
        })}
      </div>
      <RouterProvider router={router} />
      <div style={{ width: "50px" }}></div>
    </div>
  );
}

export default App;

function Tooltip() {
  const { ref, Tooltip } = useHoverTooltip(
    "Hello This is a really big Message"
  );

  return (
    <div ref={ref}>
      Hello
      <Tooltip />
    </div>
  );
}
