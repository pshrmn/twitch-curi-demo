import { rand, weighted } from './random';

// favor vowels over consonants
const letters = 'ooooouuuuuiiiiwrysglcvbnmqpf';

const wordLength = weighted([
  { w: 1, length: 1 },
  { w: 3, length: 2 },
  { w: 4, length: 3 },
  { w: 5, length: 4 },
  { w: 5, length: 5 },
  { w: 3, length: 6 }
]);

function randomLetter() {
  return letters.charAt(rand(letters.length));
}

export function word() {
  let w = '';
  const len = wordLength().length;
  for (let i=0; i<len; i++) {
    w += randomLetter();
  }
  return w;
}

export function sentence() {
  const delta = Math.floor(Math.random() * 10);
  const wordCount = 15 + delta;
  const words = [];
  for (let w=0; w<wordCount; w++) {
    words.push(word());
  }
  const s = `${words.join(' ')}.`;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function randomParagraph() {
  const delta = Math.floor(Math.random() * 5);
  const count = 5 + delta;
  const sentences = [];
  for (let s=0; s<count; s++) {
    sentences.push(sentence());
  }
  return sentences.join(' ');
}

export function paragraphs(count = 1) {
  const p = [];
  for (let i=0; i<count; i++) {
    p.push(randomParagraph());
  }
  return p.join('\n');
}
