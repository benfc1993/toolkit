interface ObjectPool<T> {
    pop: () => ObjectPoolObject<T>
    get: (props: T) => ObjectPoolObject<T>
    length: number
}

type ObjectPoolObject<T> = T & { unload: () => void }

const createPool = <T extends Object>(template: T, initialSize: number): ObjectPool<T> => {

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
    const get = (props: T) => {
        const out = pop()
        Object.entries(props).forEach(([key, value]) => out[key as keyof T] = value)
        return out
    }
    return {
        pop,
        get,
        get length() { return arr.length }
    }
}

const pool = createPool({ a: 1, b: '123' }, 10000)
let inUse: Array<ObjectPoolObject<any>> = []
const itterations = 100_000
console.time('test')
for (let i = 0; i < itterations; i++) {
    // const from = { a: 1, b: '' }
    // const a = { ...from }
    // a.a = i
    // a.b = 'test'
    // const a = pool.pop();
    const a = pool.get({ a: i, b: 'test' });
    inUse.push(a)
    if (Math.random() > 0.3) {
        inUse.forEach(item => item.unload())
        inUse = []
    }
}
console.timeEnd('test')
