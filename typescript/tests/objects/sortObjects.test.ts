import { sortObjectsByKey } from '../../src/objects/sortObject'

describe('Sort objects', () => {
  describe('Numeric ordering', () => {
    it('should sort objects when provided a key which has a number value', () => {
      const objs = [
        { a: 4, b: '0' },
        { a: 7, b: '1' },
        { a: 3, b: '2' },
        { a: 1, b: '3' },
        { a: 400, b: '4' },
      ]
      const expected = [
        { a: 1, b: '3' },
        { a: 3, b: '2' },
        { a: 4, b: '0' },
        { a: 7, b: '1' },
        { a: 400, b: '4' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a')

      expect(sortedObjs).toStrictEqual(expected)
    })

    it('should sort objects in asc order by default', () => {
      const objs = [
        { a: 4, b: '0' },
        { a: 7, b: '1' },
        { a: 3, b: '2' },
        { a: 1, b: '3' },
        { a: 400, b: '4' },
      ]
      const expected = [
        { a: 1, b: '3' },
        { a: 3, b: '2' },
        { a: 4, b: '0' },
        { a: 7, b: '1' },
        { a: 400, b: '4' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a')

      expect(sortedObjs).toStrictEqual(expected)
    })

    it('should sort objects in desc order when provided', () => {
      const objs = [
        { a: 4, b: '0' },
        { a: 7, b: '1' },
        { a: 3, b: '2' },
        { a: 1, b: '3' },
        { a: 400, b: '4' },
      ]
      const expected = [
        { a: 400, b: '4' },
        { a: 7, b: '1' },
        { a: 4, b: '0' },
        { a: 3, b: '2' },
        { a: 1, b: '3' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a', 'desc')

      expect(sortedObjs).toStrictEqual(expected)
    })
  })

  describe('Alphanumeric order', () => {
    it('should sort objects when provided a key which has a alphanumeric value', () => {
      const objs = [
        { a: 'Ben', b: '0' },
        { a: 'Amy', b: '1' },
        { a: 'Duck', b: '2' },
        { a: 'Pears', b: '3' },
        { a: 'Moon', b: '4' },
      ]
      const expected = [
        { a: 'Amy', b: '1' },
        { a: 'Ben', b: '0' },
        { a: 'Duck', b: '2' },
        { a: 'Moon', b: '4' },
        { a: 'Pears', b: '3' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a')

      expect(sortedObjs).toStrictEqual(expected)
    })

    it('should sort objects in asc order by default', () => {
      const objs = [
        { a: 'Ben', b: '0' },
        { a: 'Amy', b: '1' },
        { a: 'Duck', b: '2' },
        { a: 'Pears', b: '3' },
        { a: 'Moon', b: '4' },
      ]
      const expected = [
        { a: 'Amy', b: '1' },
        { a: 'Ben', b: '0' },
        { a: 'Duck', b: '2' },
        { a: 'Moon', b: '4' },
        { a: 'Pears', b: '3' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a')

      expect(sortedObjs).toStrictEqual(expected)
    })

    it('should sort objects in desc order when provided', () => {
      const objs = [
        { a: 'Ben', b: '0' },
        { a: 'Amy', b: '1' },
        { a: 'Duck', b: '2' },
        { a: 'Pears', b: '3' },
        { a: 'Moon', b: '4' },
      ]
      const expected = [
        { a: 'Pears', b: '3' },
        { a: 'Moon', b: '4' },
        { a: 'Duck', b: '2' },
        { a: 'Ben', b: '0' },
        { a: 'Amy', b: '1' },
      ]

      const sortedObjs = sortObjectsByKey(objs, 'a', 'desc')

      expect(sortedObjs).toStrictEqual(expected)
    })
  })

  it('should throw an error if the value for the provided key is neither a string or number', () => {
    const obj = [{ a: [1, 2] }, { a: [1, 2] }, { a: [1, 2] }]

    try {
      sortObjectsByKey(obj, 'a')

      fail('Function should throw an error')
    } catch (err) {
      expect(err).toEqual('Key to sort on must be a number or string')
    }
  })

  it('should throw an error if the value for the provided key is not always a number', () => {
    const obj = [{ a: 1 }, { a: 2 }, { a: [1, 2] }]

    try {
      sortObjectsByKey(obj, 'a')

      fail('Function should throw an error')
    } catch (err) {
      expect(err).toEqual('Key to sort on must be a number or string')
    }
  })

  it('should throw an error if the value for the provided key is not always a string', () => {
    const obj = [{ a: '1' }, { a: '2' }, { a: { b: 1, c: 2 } }]

    try {
      sortObjectsByKey(obj, 'a')

      fail('Function should throw an error')
    } catch (err) {
      expect(err).toEqual('Key to sort on must be a number or string')
    }
  })
})
