const readOnlyRotor = Object.freeze(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

const createRotor = (): string[] => {
  return Object.assign([], readOnlyRotor);
};

export {
  readOnlyRotor,
  createRotor
};
