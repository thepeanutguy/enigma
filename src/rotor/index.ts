import { rotorFactory as injector } from './rotor';
import { shuffle } from '../helpers/shuffle';

const rotorFactory = injector(shuffle);

export { rotorFactory };
