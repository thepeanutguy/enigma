import { Shuffle } from './shuffle.interface';

/**
 * @see https://stackoverflow.com/a/46545530
 * @see https://en.wikipedia.org/wiki/Schwartzian_transform
 */
const shuffle: Shuffle = (arr) =>
  arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export { shuffle };
