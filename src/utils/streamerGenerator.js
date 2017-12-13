import { rand, weightedRandomNumberGenerator } from './random';

const adjectives = [
  'Cool',
  'Awesome',
  'Nice',
  'Happy',
  'Sad',
  'Angry',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet',
  'Ace',
  'Top',
  'Super',
  'Evil',
  'Giant',
  'Tiny'
];

const nouns = [
  'Lizard',
  'Frog',
  'Toad',
  'Bear',
  'Lion',
  'Tiger',
  'Wolf',
  'Dog',
  'Cat',
  'Octopus',
  'Monkey',
  'Gorilla',
  'Captain',
  'Noob'
];

function randomAdjective() {
  return adjectives[rand(adjectives.length)];
}

function streamName() {
  const adj = randomAdjective();
  const noun = nouns[rand(nouns.length)];
  return `${adj}${noun}${Math.random() > 0.75 ? rand(10000) : ''}`;
}

const viewerWeights = weightedRandomNumberGenerator([
  { w: 25, range: [0, 100] },
  { w: 35, range: [100, 1000] },
  { w: 35, range: [1000, 10000] },
  { w: 5, range: [10000, 50000] }
]);

const followerCount = weightedRandomNumberGenerator([
  { w: 15, range: [0, 1000] },
  { w: 25, range: [1000, 25000] },
  { w: 25, range: [25000, 100000] },
  { w: 20, range: [100000, 500000] },
  { w: 15, range: [500000, 2500000] }
]);

export const streamer = () => ({
  username: streamName(),
  watching: viewerWeights(),
  followers: followerCount()
});

