import { rand, weighted } from './random';

const words = [];
// favor vowels over consonants
const letters = 'ooooouuuiiiwrysglcvbnmqpf';

const wordLength = weighted([
  { w: 1, length: 1 },
  { w: 3, length: 2 },
  { w: 4, length: 3 },
  { w: 5, length: 4 },
  { w: 5, length: 5 },
  { w: 3, length: 6 },
]);

function randomLetter() {
  return letters.charAt(rand(letters.length));
}

export function word() {
  let word = '';
  const len = wordLength().length;
  for (let i=0; i<len; i++) {
    word += randomLetter();
  }
  return word;
}

export function sentence() {
  const delta = Math.floor(Math.random() * 50);
  const wordCount = 100 + delta;
  const words = [];
  for (let w=0; w<wordCount; w++) {
    words.push(word());
  }
  let sentence = words.join(' ') + '.';
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
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

export function paragraphs(paragraphs = 1) {
  const p = [];
  for (let i=0; i<paragraphs; i++) {
    p.push(randomParagraph());
  }
  return p.join('\n');
}
