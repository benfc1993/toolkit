declare global {
  interface Array<T> {
    random(): T
  }
}

Array.prototype.random = function <T>(): T {
  return this[Math.floor(Math.random() * this.length)]
}

export {}
