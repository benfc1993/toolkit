export const d3For = <T>(array: T[][][], func: (item: T) => void) => {
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array[1].length; j++) {
      for (let k = 0; k < array[1].length; k++) {
        func(array[i][j][k])
      }
    }
  }
}
