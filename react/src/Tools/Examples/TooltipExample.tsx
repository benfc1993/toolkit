import { useHoverTooltip } from "../hooks/useTooltip";

export const TooltipExample = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr" }}>
      {Array.from({ length: 20 }).map((_, idx) => {
        const bottom = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;
        return <TooltipElement bottom={bottom} left={left} />;
      })}
    </div>
  );
};
const TooltipElement: React.FC<{ bottom: number; left: number }> = (props) => {
  const { ref, showTooltip, hideTooltip, Tooltip } = useHoverTooltip(
    "Hello This is a really big Message",
    "right"
  );
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: `${props.bottom}px`,
          left: `${props.left}px`,
        }}
      >
        <div ref={ref}>Hello</div>
        <button onClick={(e) => showTooltip()}>show</button>
        <button onClick={(e) => hideTooltip()}>hide</button>
      </div>
      <Tooltip>
        <div>Test</div>
      </Tooltip>
    </>
  );
};
