import { tryParseInt } from '../src/tryParseInt'

describe('Try parse int', () => {
  it('should return a provided string parsed as a number', () => {
    const str = '14523'
    const result = tryParseInt(str, 0)

    expect(isNaN(result)).toEqual(false)
    expect(result).toEqual(14523)
  })

  it('should return a the fallback number if the provided string cannot be parsed as a number', () => {
    const str = '14s5f23'
    const result = tryParseInt(str, 11)

    expect(isNaN(result)).toEqual(false)
    expect(result).toEqual(11)
  })
})
