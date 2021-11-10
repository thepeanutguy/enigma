import { rotorFactory } from './rotor';

describe('rotor', () => {
  const position = <T>(arr: readonly T[]): T[] => arr as any[];

  test('create a serially connected rotor', () => {
    const result = rotorFactory(position);
    const side = [
      { letter: 'A', wiredTo: 'A' },
      { letter: 'B', wiredTo: 'B' },
      { letter: 'C', wiredTo: 'C' },
      { letter: 'D', wiredTo: 'D' },
      { letter: 'E', wiredTo: 'E' },
      { letter: 'F', wiredTo: 'F' },
      { letter: 'G', wiredTo: 'G' },
      { letter: 'H', wiredTo: 'H' },
      { letter: 'I', wiredTo: 'I' },
      { letter: 'J', wiredTo: 'J' },
      { letter: 'K', wiredTo: 'K' },
      { letter: 'L', wiredTo: 'L' },
      { letter: 'M', wiredTo: 'M' },
      { letter: 'N', wiredTo: 'N' },
      { letter: 'O', wiredTo: 'O' },
      { letter: 'P', wiredTo: 'P' },
      { letter: 'Q', wiredTo: 'Q' },
      { letter: 'R', wiredTo: 'R' },
      { letter: 'S', wiredTo: 'S' },
      { letter: 'T', wiredTo: 'T' },
      { letter: 'U', wiredTo: 'U' },
      { letter: 'V', wiredTo: 'V' },
      { letter: 'W', wiredTo: 'W' },
      { letter: 'X', wiredTo: 'X' },
      { letter: 'Y', wiredTo: 'Y' },
      { letter: 'Z', wiredTo: 'Z' },
    ];

    expect(result).toStrictEqual({
      leftSide: side,
      rightSide: side,
    });
  });
});
