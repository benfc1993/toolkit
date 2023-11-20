const createPool = (template, initialSize) => {
    const arr = Array.from({ length: initialSize }).map(_ => {
        const obj = { ...template };
        Object.defineProperty(obj, 'unload', { value: () => arr.push(obj), writable: false, enumerable: false });
        return obj;
    });
    const pop = () => {
        const top = arr.shift();
        if (!top) {
            const obj = { ...template };
            Object.defineProperty(obj, 'unload', { value: () => arr.push(obj), writable: false, enumerable: false });
            return obj;
        }
        return top;
    };
    const get = (props) => {
        const out = pop();
        Object.entries(props).forEach(([key, value]) => out[key] = value);
        return out;
    };
    return {
        pop,
        get,
        get length() { return arr.length; }
    };
};
const pool = createPool({ a: 1, b: '123' }, 10000);
let inUse = [];
const itterations = 100_000;
console.time('test');
for (let i = 0; i < itterations; i++) {
    // const from = { a: 1, b: '' }
    // const a = { ...from }
    // a.a = i
    // a.b = 'test'
    // const a = pool.pop();
    const a = pool.get({ a: i, b: 'test' });
    inUse.push(a);
    if (Math.random() > 0.3) {
        inUse.forEach(item => item.unload());
        inUse = [];
    }
}
console.timeEnd('test');
