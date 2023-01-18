import { useAsync } from "../../hooks/useAsync";

const promise = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      return resolve("Hello I have returned");
    }, 1000);
  });

const errorPromise = () =>
  new Promise<string>((_, reject) => {
    setTimeout(() => {
      return reject(new Error("Promise returned with an error"));
    }, 1000);
  });

export const UseAsync = () => {
  const { loading, value, call } = useAsync<string>(promise);
  const {
    loading: errorLoading,
    error,
    call: callError,
  } = useAsync<string>(errorPromise);

  return (
    <div>
      {loading && <p>loading...</p>}
      {value && <p>{value}</p>}
      <button onClick={call}>Get Data</button>
      {errorLoading ? <p>loading...</p> : error && <p>{error.message}</p>}
      <button onClick={callError}>Test Error</button>
    </div>
  );
};
