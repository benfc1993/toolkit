interface node {
  first: node | null
  next: node | null
  prev: node | null
}

export const depthFirst = <T extends node>(
  start: T,
  predicate?: (node: T) => boolean
): T | undefined => {
  let child = start.first
  while (child !== null) {
    if (predicate && predicate(child as T)) return child as T
    if (child.first !== null) {
      return depthFirst(child as T, predicate)
    }
    child = child.next
  }
}
