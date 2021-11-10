import { Enigma } from './enigma.interface';

const enigma: Enigma = (plugboard, rotors, reflector) => {
  const rotorLetter = (letter: string) => {};

  const reflectLetter = (letter: string) => {
    const index = reflector;
  };

  // TODO: add support for chaining.
  return (letter) => {
    const plugLetterIn = plugboard(letter);
    const rotorLetterIn = rotorLetter(plugLetterIn);

    return letter;
  };
};
