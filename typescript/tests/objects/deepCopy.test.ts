import { deepCopy } from "../../src/objects/deepCopy"

describe('Deep copy', () => {
  it('should make a copy of a string value', () => {
    const obj = {a: {b: 'Test'}}
    const copy = deepCopy(obj)

    expect(obj).toBe(obj)
    expect(obj).toEqual({a: {b: 'Test'}})
    
    expect(copy).not.toBe(obj)
    expect(copy).toEqual({a: {b: 'Test'}})
  })

  it('should make a copy of a top level object', () => {
    const obj = {a: {b: 2, c: 3}}
    const copy = deepCopy(obj)
    copy.a.b += 4

    expect(obj).toBe(obj)
    expect(obj.a.b).toEqual(2)
    
    expect(copy).not.toBe(obj)
    expect(copy.a).not.toBe(obj.a)
    expect(copy.a.b).toEqual(6)
  })

  it('should make a copy of a top level array', () => {
    const obj = {a: [1,2,3,4]}
    const copy = deepCopy(obj)
    copy.a[0] += 4

    expect(obj).toBe(obj)
    expect(obj.a[0]).toEqual(1)

    expect(copy).not.toBe(obj)
    expect(copy.a[0]).toEqual(5)
  })

  it('should make a copy of objects in an array', () => {
    const obj = {a: [{b: 1},{b: 1},{b: 1},{b: 1}]}
    const copy = deepCopy(obj)
    copy.a[0].b += 4

    expect(obj).toBe(obj)
    expect(obj.a[0].b).toEqual(1)

    expect(copy).not.toBe(obj)
    expect(copy.a[0]).not.toBe(obj.a[0])
    expect(copy.a[0].b).toEqual(5)
  })
})