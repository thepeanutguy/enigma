import { createRotor, readOnlyRotor } from './rotor'

describe('rotor', () => {
  test('create new instance of the rotor', () => {
    const result = createRotor()

    expect(result).toStrictEqual(readOnlyRotor)
    expect(result).not.toBe(readOnlyRotor)
  })
})
