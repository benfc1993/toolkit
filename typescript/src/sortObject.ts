export const sortObjectsByKey = <T>(objects: T[], key: keyof T): T[] => {
  if (objects.find((o) => typeof o[key] !== "number") !== null)
    throw "Key to sort on must be a number";
  return objects.sort((a, b) => (a[key] as number) - (b[key] as number));
};
