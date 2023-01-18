import { useState } from "react";

type UseAsyncResponse<T> = {
  loading: boolean;
  value: T | undefined;
  error: Error | undefined;
  call: () => void;
};

export const useAsync = <T>(promise: () => Promise<T>): UseAsyncResponse<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<T>();
  const [error, setError] = useState<Error>();

  const call = () => {
    setLoading(true);
    promise()
      .then((data) => setValue(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { loading, value, error, call };
};
