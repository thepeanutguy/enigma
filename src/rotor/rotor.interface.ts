interface RotorPosition {
  letter: string;
  wiredTo: string;
}

type RotorSide = RotorPosition[];

type Rotor = {
  leftSide: RotorSide;
  rightSide: RotorSide;
};

export { RotorSide, Rotor };
