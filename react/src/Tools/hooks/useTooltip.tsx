import { useState, useEffect, useRef, useCallback } from "react";
import { setPartialState } from "../Utils/setPartialState";

interface Position {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

interface TooltipState {
  text: string;
  show: boolean;
  position: Position;
}

type TooltipPosition = "top" | "right" | "bottom" | "left";

export const useHoverTooltip = (
  tooltipText: string,
  tooltipPosition: TooltipPosition = "top"
) => {
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    show: false,
    text: tooltipText,
    position: {
      top: "",
      right: "",
      bottom: "",
      left: "",
    },
  });
  const elRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    const position = calculateTooltipPosition(
      elRef.current as HTMLElement,
      tooltipRef.current as HTMLElement,
      tooltipPosition
    );
    setPartialState(setTooltipState, { show: true, position });
  };

  const hideTooltip = () => {
    setPartialState(setTooltipState, { show: false });
  };
  const handleMouseOver = useCallback(() => {
    showTooltip();
  }, []);

  const handleMouseOut = useCallback(() => {
    hideTooltip();
  }, []);

  useEffect(() => {
    const elCurrent = elRef.current;
    if (elCurrent) {
      elCurrent.addEventListener("mouseenter", handleMouseOver);
      elCurrent.addEventListener("mouseleave", handleMouseOut);
    }

    return () => {
      if (elCurrent) {
        elCurrent.removeEventListener("mouseenter", handleMouseOver);
        elCurrent.removeEventListener("mouseleave", handleMouseOut);
      }
    };
  }, [handleMouseOver, handleMouseOut]);

  const Tooltip: React.FC<{ children?: React.ReactNode }> = (props) => {
    const { children } = props;

    const [show, setShow] = useState(false);

    useEffect(() => {
      requestAnimationFrame(() => setShow(tooltipState.show));
    }, []);
    return (
      <div
        ref={tooltipRef}
        className={`tooltip ${show ? "show" : ""}`}
        style={{ ...tooltipState.position, width: "200px" }}
      >
        {children ? children : tooltipState.text}
      </div>
    );
  };

  return {
    ref: elRef,
    showTooltip,
    hideTooltip,
    Tooltip,
  };
};

const calculateTooltipPosition = (
  element: HTMLElement,
  tooltipElement: HTMLElement,
  tooltipPosition: TooltipPosition
): Position => {
  const position: Position = { top: "", left: "", right: "", bottom: "" };
  if (!tooltipElement || !element) return position;

  const rect = element.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();
  const buffer = 5;

  const left = findLeftEdge(rect, tooltipRect, tooltipPosition, buffer);
  const right = findRightEdge(rect, tooltipRect, tooltipPosition, buffer);
  const top = findTopEdge(rect, tooltipRect, tooltipPosition, buffer);
  const bottom = findBottomEdge(rect, tooltipRect, tooltipPosition, buffer);

  const centerXPos = rect.x + rect.width / 2 - tooltipRect.width / 2;
  const centerYPos = rect.y + rect.height / 2 - tooltipRect.height / 2;

  const rightPos = rect.x + rect.width + buffer;
  const topPos = rect.y - tooltipRect.height - buffer;
  const bottomPos = rect.y + rect.height + buffer;
  const leftPos = rect.x - tooltipRect.width - buffer;

  switch (tooltipPosition) {
    case "top":
      position.left = `${centerXPos}px`;
      position.top = `${topPos}px`;
      break;
    case "right":
      position.left = `${rightPos}px`;
      position.top = `${centerYPos}px`;
      break;
    case "bottom":
      position.left = `${centerXPos}px`;
      position.top = `${bottomPos}px`;
      break;
    case "left":
      position.left = `${leftPos}px`;
      position.top = `${centerYPos}px`;
      break;
  }

  if (tooltipPosition !== "right" && left < 0) position.left = `${rightPos}px`;
  else if (tooltipPosition !== "left" && right + buffer >= window.innerWidth)
    position.left = `${leftPos}px`;

  if (tooltipPosition !== "bottom" && top < 0) position.top = `${bottomPos}px`;
  else if (tooltipPosition !== "top" && bottom >= buffer + window.innerHeight)
    position.top = `${topPos}px`;

  return position;
};

const findTopEdge = (
  elRect: DOMRect,
  tooltipRect: DOMRect,
  tooltipPosition: TooltipPosition,
  buffer: number
): number => {
  const dir = tooltipPosition !== "top" && tooltipPosition !== "bottom" ? 0 : 1;
  const den = tooltipPosition !== "top" && tooltipPosition !== "bottom" ? 1 : 2;

  const topEdge =
    elRect.y - (tooltipRect.height + dir * elRect.height) / den + buffer;
  return topEdge;
};

const findBottomEdge = (
  elRect: DOMRect,
  tooltipRect: DOMRect,
  tooltipPosition: TooltipPosition,
  buffer: number
): number => {
  const dir = tooltipPosition !== "top" && tooltipPosition !== "bottom" ? 0 : 1;
  const den = tooltipPosition !== "top" && tooltipPosition !== "bottom" ? 1 : 2;
  const bottomEdge =
    elRect.y + (tooltipRect.height + dir * elRect.height) / den + buffer;

  return bottomEdge;
};

const findRightEdge = (
  elRect: DOMRect,
  tooltipRect: DOMRect,
  tooltipPosition: TooltipPosition,
  buffer: number
): number => {
  const dir = tooltipPosition === "right" ? 0 : 1;
  const den = tooltipPosition === "right" ? 1 : 2;
  const rightEdge =
    elRect.x +
    (elRect.width + (tooltipRect.width + dir * elRect.width)) / den +
    buffer;

  return rightEdge;
};

const findLeftEdge = (
  elRect: DOMRect,
  tooltipRect: DOMRect,
  tooltipPosition: TooltipPosition,
  buffer: number
): number => {
  const dir = tooltipPosition === "left" ? 0 : 1;
  const den = tooltipPosition === "left" ? 1 : 2;
  const leftEdge =
    elRect.x - (tooltipRect.width + dir * elRect.width) / den + buffer;

  return leftEdge;
};
