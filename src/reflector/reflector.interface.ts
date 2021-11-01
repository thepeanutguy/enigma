interface ReflectorPosition {
  letter: string;
  wiredTo: string;
}

type Position = (arr: readonly string[]) => string[];
type Reflector = (position: Position) => ReflectorPosition[];

export { Reflector };
