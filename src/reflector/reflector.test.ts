import { reflectorFactory } from './reflector';

describe('reflector', () => {
  const position = <T>(arr: readonly T[]): T[] => arr as any[];

  test('create a serially connected reflector', () => {
    const reflector = reflectorFactory(position);

    expect(reflector).toStrictEqual([
      { letter: 'a', wiredTo: 'a' },
      { letter: 'b', wiredTo: 'b' },
      { letter: 'c', wiredTo: 'c' },
      { letter: 'd', wiredTo: 'd' },
      { letter: 'e', wiredTo: 'e' },
      { letter: 'f', wiredTo: 'f' },
      { letter: 'g', wiredTo: 'g' },
      { letter: 'h', wiredTo: 'h' },
      { letter: 'i', wiredTo: 'i' },
      { letter: 'j', wiredTo: 'j' },
      { letter: 'k', wiredTo: 'k' },
      { letter: 'l', wiredTo: 'l' },
      { letter: 'm', wiredTo: 'm' },
      { letter: 'n', wiredTo: 'n' },
      { letter: 'o', wiredTo: 'o' },
      { letter: 'p', wiredTo: 'p' },
      { letter: 'q', wiredTo: 'q' },
      { letter: 'r', wiredTo: 'r' },
      { letter: 's', wiredTo: 's' },
      { letter: 't', wiredTo: 't' },
      { letter: 'u', wiredTo: 'u' },
      { letter: 'v', wiredTo: 'v' },
      { letter: 'w', wiredTo: 'w' },
      { letter: 'x', wiredTo: 'x' },
      { letter: 'y', wiredTo: 'y' },
      { letter: 'z', wiredTo: 'z' },
    ]);
  });
});
