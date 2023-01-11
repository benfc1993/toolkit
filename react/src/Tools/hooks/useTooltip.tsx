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
  const blockMouseOutRef = useRef(false);

  const handleMouseOver = useCallback(() => {
    console.log("mouse over");
    setPartialState(setTooltipState, { show: true });
  }, []);

  const handleMouseOut = useCallback(() => {
    if (!blockMouseOutRef.current)
      setPartialState(setTooltipState, { show: false });
  }, []);

  const handleBlockMouseOut = useCallback(() => {
    blockMouseOutRef.current = true;
  }, []);

  const handleFreeMouseOut = useCallback(() => {
    blockMouseOutRef.current = false;
    setPartialState(setTooltipState, { show: false });
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

  useEffect(() => {
    const tooltipElement = tooltipRef.current as HTMLElement;
    if (!tooltipElement) return;
    const rect = elRef.current?.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    if (rect) {
      const left = findLeftEdge(rect, tooltipRect);
      const right = findRightEdge(rect, tooltipRect);
      const top = findTopEdge(rect, tooltipRect);
      const bottom = findBottomEdge(rect, tooltipRect);

      const position: Position = { top: "", left: "", right: "", bottom: "" };

      const buffer = 5;
      const rectIsOutOfBoundsX =
        left < 0 || right + buffer >= window.innerWidth;
      const rectIsOutOfBoundsY = top < 0 || bottom > window.innerHeight;

      if (rectIsOutOfBoundsX) {
        if (left < 0) position.left = `${buffer}px`;
        if (right + buffer >= window.innerWidth) position.right = `${buffer}px`;
      } else {
        position.left = `${rect.x + rect.width / 2 - tooltipRect.width / 2}px`;
      }
      if (rectIsOutOfBoundsY) {
        if (top < 0) position.top = `${buffer}px`;
        if (bottom < 0) position.bottom = `${buffer}px`;
      } else {
        position.top = `${rect.y - tooltipRect.height - 5}px`;
      }

      setPartialState(setTooltipState, { position });
    }
  }, [tooltipState.show]);

  const Tooltip = () => {
    return tooltipState.show ? (
      <div
        ref={tooltipRef}
        className="tooltip"
        style={{ ...tooltipState.position, width: "200px" }}
        onMouseEnter={handleBlockMouseOut}
        onMouseLeave={handleFreeMouseOut}
      >
        {tooltipState.text}
      </div>
    ) : (
      <></>
    );
  };

  return {
    ref: elRef,
    Tooltip,
  };
};

const findTopEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const topEdge = elRect.y - (tooltipRect.height + elRect.height + 15);
  return topEdge;
};

const findBottomEdge = (elRect: DOMRect, tooltipRect: DOMRect): number => {
  const bottomEdge = elRect.y + tooltipRect.height + elRect.height + 15;

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
