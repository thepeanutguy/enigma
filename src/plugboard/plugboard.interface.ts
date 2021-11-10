interface PlugboardCable {
  fromLetter: string;
  toLatter: string;
}

type Plugboard = (letter: string) => string;
type PlugboardFactory = (cabling: PlugboardCable[]) => Plugboard;

export { PlugboardFactory, Plugboard, PlugboardCable };
