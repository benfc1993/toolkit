function getLeft(index: number) {
    return index * 2 + 1
}

function getRight(index: number) {
    return index * 2 + 2
}
function getParent(index: number) {
    return Math.floor((index - 1) / 2)
}
function insert<T>(tree: T[], value: T, test: (a: T, b: T) => number, at: number = 0) {
    if (tree.length === 0) return tree[0] = value
    if (test(value, tree[at]) <= 0) {

        if (tree[getLeft(at)] === undefined) {
            tree[getLeft(at)] = value
            return
        }
        insert(tree, value, test, getLeft(at))
    }
    if (test(value, tree[at]) > 1) {
        if (tree[getRight(at)] === undefined) {
            tree[getRight(at)] = value
            return
        }
        insert(tree, value, test, getRight(at))
    }
}
function sort<T>(tree: T[], dir: 'asc' | 'desc' = 'asc', rootIndex: number = 0) {
    const sorted = walkTree(tree, rootIndex)
    return dir === 'asc' ? sorted : sorted.reverse()
}

function walkTree<T>(tree: T[], parentIndex: number = 0): T[] {
    if (tree[getLeft(parentIndex)] === undefined && tree[getRight(parentIndex)] === undefined) return [tree[parentIndex]]
    return [...walkTree(tree, getLeft(parentIndex)), tree[parentIndex], ...walkTree(tree, getRight(parentIndex))].filter(a => a !== undefined)
}

const tree: { a: number, b: string }[] = [{ a: 10, b: 'test' }]

for (let i = 0; i < 10; i++)
    insert(tree, { a: Math.floor(Math.random() * 1000000), b: 'test' }, (a, b) => a.a - b.a)

console.log(sort(tree))
