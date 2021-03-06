import { PlugboardFactory } from './plugboard.interface';
import { CableSelfReferenceError, DuplicateCableError } from './exceptions';

/**
 * @throws {CableSelfReferenceError} - a letter cannot be cabled to itself. Leave it un-cabled instead.
 * @throws {DuplicateCableError} - two cable cannot connect to the same letter.
 */
const plugboardFactory: PlugboardFactory = (cabling) => {
  cabling.map((cable, cableIndex) => {
    if (cable.fromLetter === cable.toLatter) {
      throw new CableSelfReferenceError(
        `cable "${cable.fromLetter}" cannot reference itself`,
      );
    }

    cabling.map((test, testIndex) => {
      if (cableIndex === testIndex) {
        return;
      }

      if (
        test.fromLetter === cable.fromLetter ||
        test.fromLetter === cable.toLatter ||
        test.toLatter === cable.fromLetter ||
        test.toLatter === cable.toLatter
      ) {
        throw new DuplicateCableError(
          `cabling "${test.fromLetter}->${test.toLatter}" already exists as "${cable.fromLetter}->${cable.toLatter}"`,
        );
      }
    });
  });

  return (letter) => {
    const cable = cabling.find((cable) => {
      return cable.fromLetter === letter || cable.toLatter === letter;
    });

    if (cable === undefined) {
      return letter;
    }

    return cable.fromLetter === letter ? cable.toLatter : cable.fromLetter;
  };
};

export { plugboardFactory };
