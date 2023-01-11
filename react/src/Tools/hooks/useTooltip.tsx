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

export const useHoverTooltip = (tooltipText: string) => {
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
      tooltipRef.current as HTMLElement
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
    return (
      <div
        ref={tooltipRef}
        className={`tooltip ${tooltipState.show ? "show" : ""}`}
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
  tooltipElement: HTMLElement
): Position => {
  const position: Position = { top: "", left: "", right: "", bottom: "" };
  if (!tooltipElement || !element) return position;

  const rect = element.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  const left = findLeftEdge(rect, tooltipRect);
  const right = findRightEdge(rect, tooltipRect);
  const top = findTopEdge(rect, tooltipRect);
  const bottom = findBottomEdge(rect, tooltipRect);

  const buffer = 5;
  const rectIsOutOfBoundsX = left < 0 || right + buffer >= window.innerWidth;
  const rectIsOutOfBoundsY = top < 0 || bottom > window.innerHeight;

  if (rectIsOutOfBoundsX) {
    if (left < 0) position.left = `${buffer}px`;
    if (right + buffer >= window.innerWidth) position.right = `${buffer}px`;
  } else {
    position.left = `${rect.x + rect.width / 2 - tooltipRect.width / 2}px`;
  }
  if (rectIsOutOfBoundsY) {
    if (top < 0) position.top = `${rect.y + rect.height + buffer}px`;
    if (bottom < 0) position.bottom = `${rect.y - rect.height - buffer}px`;
  } else {
    position.top = `${rect.y - tooltipRect.height - 5}px`;
  }

  return position;
};

const findTopEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const topEdge = elRect.y - (tooltipRect.height + elRect.height);
  return topEdge;
};

const findBottomEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const bottomEdge = elRect.y + tooltipRect.height + elRect.height;

  return bottomEdge;
};

const findRightEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const rightEdge =
    elRect.x + elRect.width / 2 + (tooltipRect.width / 2 - elRect.width / 2);

  return rightEdge;
};

const findLeftEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const leftEdge = elRect.x - (tooltipRect.width / 2 - elRect.width / 2);

  return leftEdge;
};
