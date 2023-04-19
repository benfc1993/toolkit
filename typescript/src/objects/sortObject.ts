export const sortObjectsByKey = <T>(
  objects: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  const dir = order === 'asc' ? 1 : -1

  if (objects.every((o) => typeof o[key] === 'number'))
    return objects.sort(
      (a, b) => (a[key] as number) * dir - (b[key] as number) * dir
    )

  if (objects.every((o) => typeof o[key] === 'string'))
    return objects.sort((a, b) => (a[key] > b[key] ? dir : -dir))

  throw 'Key to sort on must be a number or string'
}
