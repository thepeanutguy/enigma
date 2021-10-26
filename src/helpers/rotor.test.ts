import { rotorFactory, readOnlyRotor } from './rotor';

describe('rotor', () => {
  test('create new instance of the rotor', () => {
    const result = rotorFactory();

    expect(result).toStrictEqual(readOnlyRotor);
    expect(result).not.toBe(readOnlyRotor);
  });
});
