import { useState, useEffect, useRef, useCallback } from "react";
import { setPartialState } from "../Utils/setPartialState";

interface TooltipState {
  text: string;
  show: boolean;
  position: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
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
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = useCallback((event: MouseEvent) => {
    setPartialState(setTooltipState, { show: true });
  }, []);

  const handleMouseOut = useCallback(() => {
    setPartialState(setTooltipState, { show: false });
  }, []);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener("mouseenter", handleMouseOver);
      current.addEventListener("mouseleave", handleMouseOut);

      return () => {
        current.removeEventListener("mouseenter", handleMouseOver);
        current.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [handleMouseOver, handleMouseOut]);

  useEffect(() => {
    const tooltipElement = ref.current?.querySelector(
      ".tooltip"
    ) as HTMLElement;
    if (!tooltipElement) return;
    const rect = ref.current?.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    console.log("hello");

    if (rect) {
      const left = rect.x - (tooltipRect.width / 2 + rect.width);
      const right = window.innerWidth - rect.x - tooltipRect.width;
      const top = rect.y - tooltipRect.height;
      const bottom = window.innerHeight - rect.y;

      console.log({ left });

      const position = {
        top: "",
        right: "",
        bottom: "",
        left: "",
        transform: "",
      };

      const buffer = 5;
      const rectIsOutOfBoundsX = left < 0 || right < 0;
      const rectIsOutOfBoundsY = top < 0 || bottom < 0;

      if (rectIsOutOfBoundsX) {
        if (left < 0) position.left = `${buffer}px`;
        if (right < 0) position.right = `${buffer}px`;
      } else {
        position.left = `${rect.x - rect.width}px`;
      }
      if (rectIsOutOfBoundsY) {
        if (top < 0) position.top = `${buffer}px`;
        if (bottom < 0) position.bottom = `${buffer}px`;
      } else {
        position.top = `${rect.y - tooltipRect.height - 5}px`;
      }

      console.log({ position });

      setPartialState(setTooltipState, { position });
    }
  }, [tooltipState.show, ref.current]);

  const Tooltip = () => {
    return tooltipState.show ? (
      <div
        className="tooltip"
        style={{ ...tooltipState.position }}
        onMouseEnter={(e) => e.stopPropagation()}
      >
        {tooltipState.text}
      </div>
    ) : (
      <></>
    );
  };

  return {
    ref,
    Tooltip,
  };
};
