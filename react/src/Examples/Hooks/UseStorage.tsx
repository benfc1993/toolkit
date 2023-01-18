import { useState } from "react";
import { useStorage } from "../../hooks/useStorage";

type dataType = {
  check?: boolean;
  name?: string;
  age?: number;
};

export const UseStorage = () => {
  const [data, setData, removeData] = useStorage<dataType>(
    { check: false, name: "Ben", age: 28 },
    "hook-example"
  );
  const [formState, setFormState] = useState<dataType>({
    check: false,
    name: "",
    age: 0,
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormState((currentData) => ({ ...currentData, [name]: value }));
  };

  return (
    <div>
      <p>{data?.check}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
      <input
        type="checkbox"
        name="check"
        checked={formState?.check}
        onChange={(e) => handleChange(e.target.name, e.target.checked)}
      />
      <input
        value={formState?.name}
        name="name"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <input
        type="number"
        value={formState?.age}
        name="age"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <button
        onClick={() => {
          setData(formState);
          setFormState({ check: false, name: "", age: 0 });
        }}
      >
        submit
      </button>
      <button onClick={removeData}>Clear Data</button>
    </div>
  );
};
