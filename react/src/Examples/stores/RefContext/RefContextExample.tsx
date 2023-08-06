import React from "react";
import { RenderCounter } from "../../../Components/Utils/RenderCounter/RenderCounter";
import "./RefContextExampleStyles.scss";
import { createRefContextStore } from "../../../export/stores/createRefContextStore";

interface ContextStoreState {
  first: string;
  last: string;
}

const { Provider, useStore } = createRefContextStore<ContextStoreState>(
  {
    first: "",
    last: "",
  },
  "exampleRefStore"
);

export const RefContextExample: React.FC = (props) => {
  return (
    <Provider>
      <RenderCounter />
      <div className={"section"}>
        <ContextInput name={"first"} />
        <ContextReader name="first" />
        <ContextInput name={"last"} />
        <ContextReader name="last" />
      </div>
    </Provider>
  );
};

const ContextInput: React.FC<{ name: keyof ContextStoreState }> = (props) => {
  const { name } = props;
  const [nameValue, setState] = useStore((store) => store[name]);

  return (
    <div>
      <RenderCounter />
      <input
        type="text"
        name="name"
        value={nameValue}
        onChange={(e) => setState({ [name]: e.target.value })}
      />
    </div>
  );
};

const ContextReader: React.FC<{ name: keyof ContextStoreState }> = (props) => {
  const { name } = props;
  const [nameValue] = useStore((store) => store[name]);

  return (
    <div>
      <RenderCounter />
      <p>
        {name}: {nameValue}
      </p>
    </div>
  );
};
