import { alphabet } from './alphabet';

const readOnlyRotor = Object.freeze(alphabet);

const rotorFactory = (): string[] => {
  return Object.assign([], readOnlyRotor);
};

export {
  readOnlyRotor,
  rotorFactory,
}
