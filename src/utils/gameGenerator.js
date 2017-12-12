import { rand } from './random';

const starterNouns = [
  'Smell',
  'Taste',
  'Sight',
  'Sound',
  'Touch',
  'Break',
  'Spin',
  'Dive',
  'Call',
  'Burn',
  'Unite',
  'Hope',
  'Spirit'
];

const prepositions = [
  'of',
  'for',
  'in',
  'under',
  'towards',
  'before'
];

const endNouns = [
  'Water',
  'Land',
  'Freedom',
  'Victory',
  'Justice',
  'Fun',
  'Unity',
  'Strength',
  'Hope',
  'Sky',
  'Space',
  'Jungle'
];

export function game() {
  return [
    starterNouns[rand(starterNouns.length)],
    prepositions[rand(prepositions.length)],
    endNouns[rand(endNouns.length)]
  ].join(' ');
}
