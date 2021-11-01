import { shuffle } from '../helpers/shuffle';
import { alphabet } from '../helpers/alphabet';
import { Reflector } from './reflector.interface';

const reflectorFactory: Reflector = (position = shuffle) => {
  const randomAlphabet = position(alphabet);

  return alphabet.map((letter, index) => ({
    letter,
    wiredTo: randomAlphabet[index],
  }));
};

const UKW = reflectorFactory(() => [
  'Q',
  'Y',
  'H',
  'O',
  'G',
  'N',
  'E',
  'C',
  'V',
  'P',
  'U',
  'Z',
  'T',
  'F',
  'D',
  'J',
  'A',
  'X',
  'W',
  'M',
  'K',
  'I',
  'S',
  'R',
  'B',
  'L',
]);
const ETW = reflectorFactory(() => [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Z',
  'U',
  'I',
  'O',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'P',
  'Y',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  'L',
]);

export { reflectorFactory, UKW, ETW };
