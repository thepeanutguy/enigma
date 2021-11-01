interface RotorPosition {
  letter: string;
  wiredTo: string;
}

type Position = (arr: readonly string[]) => string[];
type RotorSide = RotorPosition[];
type Rotor = (position: Position) => {
  leftSide: RotorSide;
  rightSide: RotorSide;
};

export { RotorSide, Rotor };
