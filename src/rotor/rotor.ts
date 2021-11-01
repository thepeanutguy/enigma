import { Rotor, RotorSide } from './rotor.interface';
import { alphabet } from '../helpers/alphabet';
import { shuffle } from '../helpers/shuffle';

const rotorFactory: Rotor = (position = shuffle) => {
  const randomAlphabet = position(alphabet);

  const leftSide: RotorSide = alphabet.map((letter, index) => ({
    letter,
    wiredTo: randomAlphabet[index],
  }));

  const rightSide: RotorSide = alphabet.map((letter) => {
    const leftPosition = leftSide.find(
      (position) => position.wiredTo === letter,
    );

    if (leftPosition === undefined) {
      throw new Error('catastrophically illogical error');
    }

    return {
      letter,
      wiredTo: leftPosition.letter,
    };
  });

  return {
    leftSide,
    rightSide,
  };
};

export { rotorFactory };
