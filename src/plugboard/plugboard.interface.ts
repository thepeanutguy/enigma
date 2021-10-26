interface PlugboardCable {
  fromLetter: string
  toLatter: string
}

type Plugboard = (cabling: PlugboardCable[]) => (letter: string) => string

export {
  Plugboard,
  PlugboardCable,
}
