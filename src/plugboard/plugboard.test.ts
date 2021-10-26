import { plugboardFactory } from './plugboard';
import { CableSelfReferenceError, DuplicateCableError } from './exceptions';
import { alphabet } from '../helpers/alphabet';

describe('plugboard', () => {
  describe('empty', () => {
    test('empty plugboard does not switch letters', () => {
      const plugboard = plugboardFactory([]);

      alphabet.map((letter) => {
        const result = plugboard(letter);

        expect(result).toStrictEqual(letter);
      });
    });
  });

  describe('configured', () => {
    const plugboard = plugboardFactory([
      { fromLetter: 'a', toLatter: 'b' },
      { fromLetter: 's', toLatter: 'e' },
    ]);

    test.each`
      letter | expected
      ${'a'} | ${'b'}
      ${'b'} | ${'a'}
      ${'c'} | ${'c'}
      ${'e'} | ${'s'}
      ${'s'} | ${'e'}
    `('plugboard switches letter "$letter" to "$expected"', ({ letter, expected }) => {
      const result = plugboard(letter);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('configured incorrectly', () => {
    test('exception on self-referencing cable', () => {
      const test = () => plugboardFactory([
        { fromLetter: 'a', toLatter: 'a' },
      ]);

      expect(test).toThrow(CableSelfReferenceError);
    });

    test('exception on duplicate cabling', () => {
      const test = () => plugboardFactory([
        { fromLetter: 'a', toLatter: 'b' },
        { fromLetter: 'b', toLatter: 'c' },
      ]);

      expect(test).toThrow(DuplicateCableError);
    });
  });
});
