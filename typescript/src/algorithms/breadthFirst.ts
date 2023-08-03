interface node {
  first: node | null
  next: node | null
  prev: node | null
}

export const breadthFirst = <T extends node>(
  start: T,
  predicate?: (node: T) => boolean
): T | undefined => {
  let child = start.first
  while (child !== null) {
    if (predicate && predicate(child as T)) return child as T
    if (child.first !== null) {
      return breadthFirst(child as T, predicate)
    }
    child = child.next
  }
}

const f: node & { name: string } = {
  name: 'f',
  first: null,
  next: null,
  prev: null,
}

const e: node & { name: string } = {
  name: 'e',
  first: null,
  next: f,
  prev: null,
}

const d: node & { name: string } = {
  name: 'd',
  first: null,
  next: null,
  prev: null,
}

const c: node & { name: string } = {
  name: 'c',
  first: null,
  next: null,
  prev: null,
}
const b: node & { name: string } = {
  name: 'b',
  first: c,
  next: d,
  prev: null,
}
const a: node & { name: string } = {
  name: 'a',
  first: b,
  next: e,
  prev: null,
}
const parent: node & { name: string } = {
  name: 'parent',
  first: a,
  next: null,
  prev: null,
}
