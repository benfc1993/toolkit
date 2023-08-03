export const d2For = <T>(array: T[][], func: (item: T) => void) => {
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array[1].length; i++) {
      func(array[i][j])
    }
  }
}
