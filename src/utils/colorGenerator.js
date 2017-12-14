import { rand } from './random';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet'
];

function randomColor(not) {
  let color = not;
  while (color === not) {
    color = colors[rand(colors.length)];
  }
  return color;
}

export default function() {
  const primary = randomColor();
  const secondary = randomColor(primary);
  return {
    primary,
    secondary
  };
}
