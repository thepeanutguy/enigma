import { reflectorFactory, UKW, ETW } from './reflector';
import { MissingLetterError } from './exceptions';

describe('reflector', () => {
  const position = <T>(arr: readonly T[]): T[] => arr as any[];

  test.each`
    letter | expected
    ${'A'} | ${'A'}
    ${'M'} | ${'M'}
    ${'Z'} | ${'Z'}
  `(
    'serially connected reflector: $letter => $expected',
    ({ letter, expected }) => {
      const reflector = reflectorFactory(position);
      const result = reflector(letter);

      expect(result).toStrictEqual(expected);
    },
  );

  test.each`
    letter | expected
    ${'A'} | ${'Q'}
    ${'M'} | ${'T'}
    ${'Z'} | ${'L'}
  `('UKW connected reflector: $letter => $expected', ({ letter, expected }) => {
    const result = UKW(letter);

    expect(result).toStrictEqual(expected);
  });

  test.each`
    letter | expected
    ${'A'} | ${'Q'}
    ${'M'} | ${'F'}
    ${'Z'} | ${'L'}
  `('ETW connected reflector: $letter => $expected', ({ letter, expected }) => {
    const result = ETW(letter);

    expect(result).toStrictEqual(expected);
  });

  test('error when letter does not exist in reflector', () => {
    const reflector = reflectorFactory(position);
    const test = () => reflector('λ');

    expect(test).toThrow(MissingLetterError);
  });
});
