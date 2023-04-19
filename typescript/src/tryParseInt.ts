export const tryParseInt = (str: string, fallback: number) => {
  if (!str.match(/^[0-9]*$/)) return fallback

  const parsed = parseInt(str)

  const validParse = !isNaN(parsed)
  return validParse ? parsed : fallback
}
