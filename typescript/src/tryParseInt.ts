export const tryParseInt = (str: string, fallback: number) => {
  const parsed = parseInt(str);
  return isNaN(parsed) ? fallback : parsed;
};
