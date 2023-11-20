import { createHash } from "crypto"
import { argv0 } from "process"
type Node<T> = {
    value: T
    next: Node<T> | null
}

export class HashMap<T> {
    private map: (Node<{ key: string, value: T }> | null)[]
    private capacity
    collisions: number = 0
    _size: number = 0
    private set size(value: number) {
        this._size = value
    }

    get size() {
        return this._size
    }

    constructor(capacity: number = 100) {
        this.capacity = capacity
        this.map = []
    }

    private hash(key: string) {
        const hash = createHash('sha256')
        hash.update(typeof key === 'string' ? key : JSON.stringify(key))
        const index = parseInt(hash.digest('hex').toString(), 16) % this.capacity
        return index
    }

    add(key: any, value: T) {

        const index = this.hash(key)
        const node = {
            value: {
                key,
                value
            },
            next: null
        }

        if (this.map[index] !== null) {
            this.collisions++
            let current = this.map[index]
            while (current?.next !== null) {
                if (!current?.next) break
                current = current!.next
            }

            current!.next = node
        } else {
            this.map[index] = node
        }
        this.size++
        if (this.collisions >= this.size / 0.2) {
            console.log(this.size)
            console.log(this.collisions)
            this.collisions = 0
            this.resize()
        }
    }

    get(key: any) {
        const index = this.hash(key)
        if (this.map[index] === null) return null

        let current = this.map[index]
        while (current !== null) {
            if (current.value.key === key) return current.value.value
            current = current.next
        }

        return null
    }

    resize() {
        console.log('resize')
        const prevCap = this.capacity
        this.capacity *= 2
        const newMap: (Node<{ key: string, value: T }> | null)[] = []
        for (let i = 0; i < prevCap; i++) {
            if (this.map[i] === null)
                continue

            let current = this.map[i]
            while (current && current !== null) {
                newMap[this.hash(current.value.key)] = current
            }
        }
        this.collisions = 0
        this.map = newMap
    }
}

const map = new HashMap<number>(100000)
const test = { a: 'foo', b: 'bar' }
for (let i = 0; i < 1000000; i++) {
    map.add(Math.random() * 10000, 1)
}

console.log(map.get(test))
console.log(map.collisions)

