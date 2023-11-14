interface ObjectPool<T> {
    pop: () => ObjectPoolObject<T>
    length: number
}

type ObjectPoolObject<T> = T & { unload: () => void }

const createPool = <T>(template: T, initialSize: number): ObjectPool<T> => {

    const arr: Array<ObjectPoolObject<T>> = Array.from({ length: initialSize }).map(_ => {
        const obj = { ...template } as ObjectPoolObject<T>
        Object.defineProperty(obj, 'unload', { value: () => arr.push(obj), writable: false, enumerable: false })
        return obj
    })
    const pop = (): ObjectPoolObject<T> => {
        const top = arr.shift()
        if (!top) {
            const obj = { ...template } as ObjectPoolObject<T>
            Object.defineProperty(obj, 'unload', { value: () => arr.push(obj), writable: false, enumerable: false })
            return obj
        }
        return top
    }
    return {
        pop,
        get length() { return arr.length }
    }
}
