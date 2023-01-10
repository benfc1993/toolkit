import React, { useRef } from "react";

const showDebug = process.env.NODE_ENV !== "production";

/**
 *
 * @param props: string
 * @returns component which will count re-renders for the node tree it is placed in
 */

export const RenderCounter: React.FC<{ name?: string }> = (props) => {
  const counter = useRef<number>(0);
  if (!showDebug) return <></>;

  const { name } = props;

  counter.current += 1;
  if (name) console.log(`render: ${name}`);

  return (
    <p
      style={{
        fontSize: "0.8rem",
        fontStyle: "italic",
      }}
    >
      rendered: {counter.current}
    </p>
  );
};
