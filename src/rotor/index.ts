import { rotorFactory as injector } from './rotor';
import { shuffle } from '../helpers/shuffle';
import { Rotor } from './rotor.interface';

const rotorFactory = injector(shuffle);

export { rotorFactory, Rotor };
