interface ReflectorPosition {
  letter: string;
  wiredTo: string;
}

type Position = (arr: readonly string[]) => string[];
type Reflector = (position: Position) => (letter: string) => string;

export { Reflector, ReflectorPosition };
