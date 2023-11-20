export type Node<TData> = {
    next: Node<TData> | null
    value: TData
}


export const createNode = <T>(value: T): Node<T> => {
    return {
        next: null, value
    }
}

function append<T>(node: Node<T>, value: T) {
    let current = node
    while (current.next !== null)
        current = current.next

    current.next = createNode(value)
    return current
}

function prepend<T>(node: Node<T>, value: T) {
    const newNode = createNode(value)
    newNode.next = node
    return newNode
}

let list = createNode(3)
append(list, 2)
append(list, 1)
list = prepend(list, 4)
let current: Node<number> | null = list
while (current !== null) {
    console.log(current.value)

    current = current.next
}
console.log(list)
