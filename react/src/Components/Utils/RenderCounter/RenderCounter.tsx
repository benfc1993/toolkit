import React, { useRef } from "react";

const showDebug = process.env.NODE_ENV !== "production";

export const RenderCounter: React.FC<{ name?: string }> = (props) => {
  const counter = useRef<number>(0);
  if (!showDebug) return <></>;

  const { name } = props;

  counter.current += 1;
  if (name) console.log(`render: ${name}`);

  return <p>renders: {counter.current}</p>;
};
