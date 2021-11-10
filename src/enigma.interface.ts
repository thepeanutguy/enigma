import { Plugboard } from './plugboard';
import { Rotor } from './rotor';
import { ReflectorPosition } from './reflector';

type Enigma = (
  plugboard: Plugboard,
  rotors: [Rotor, Rotor, Rotor],
  reflector: ReflectorPosition[],
) => (letter: string) => string;

export { Enigma };
