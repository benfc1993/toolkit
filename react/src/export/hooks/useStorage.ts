import { useCallback, useEffect, useState } from "react";

type StorageType = "local" | "session";

type UseStorage<T> = [
  value: T | undefined,
  setValue: React.Dispatch<React.SetStateAction<T | undefined>>,
  removeValue: () => void
];

export const useStorage = <T>(
  initialData: T,
  storageKey: string,
  storageType: StorageType = "local"
): UseStorage<T> => {
  const storage = storageType === "local" ? localStorage : sessionStorage;
  const [value, setValue] = useState<T | undefined>(() => {
    const data = storage.getItem(storageKey);
    if (data !== null) return JSON.parse(data);

    if (typeof initialData === "function") {
      return initialData();
    } else {
      return initialData;
    }
  });

  useEffect(() => {
    if (value === undefined) return storage.removeItem(storageKey);
    storage.setItem(storageKey, JSON.stringify(value));
  }, [storage, storageKey, value]);

  const removeValue = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, removeValue];
};
