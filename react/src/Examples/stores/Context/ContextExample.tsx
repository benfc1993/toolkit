import React from "react";
import { RenderCounter } from "../../../Components/Utils/RenderCounter/RenderCounter";
import { createContextStore, useStore } from "./store/createContextStore";
import "./ContextExampleStyles.scss";

interface ContextStoreState {
  first: string;
  last: string;
}

const { ContextStoreProvider, useContextStore } = createContextStore(() =>
  useStore<ContextStoreState>({ first: "", last: "" }, "context-store-example")
);

export const ContextExample: React.FC = (props) => {
  return (
    <ContextStoreProvider>
      <RenderCounter name={"context store outer"} />
      <div className={"section"}>
        <ContextInput name={"first"} />
        <ContextReader name="first" />
        <ContextInput name={"last"} />
        <ContextReader name="last" />
      </div>
    </ContextStoreProvider>
  );
};

const ContextInput: React.FC<{ name: keyof ContextStoreState }> = (props) => {
  const { name } = props;
  const { data, set } = useContextStore();

  return (
    <div>
      <RenderCounter />
      <input
        type="text"
        name="name"
        value={data[name]}
        onChange={(e) => set({ [name]: e.target.value })}
      />
    </div>
  );
};

const ContextReader: React.FC<{ name: keyof ContextStoreState }> = (props) => {
  const { name } = props;
  const { data } = useContextStore();

  return (
    <div>
      <RenderCounter />
      <p>
        {name}: {data[name]}
      </p>
    </div>
  );
};
