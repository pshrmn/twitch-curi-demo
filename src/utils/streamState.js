import { rand } from './random';
import { game } from './gameGenerator';
import { streamer } from './streamerGenerator';

const games = [];
for (let g = 0; g < 20; g++) {
  games.push({
    name: game(),
    watching: 0
  });
}

const streamers = [];
for (let g=0; g<100; g++) {
  const s = streamer();
  streamers.push(s);

  const playing = games[rand(games.length)];
  s.playing = playing;
  playing.watching += s.watching;
}

console.log('GAMES', games);
console.log('STREAMERS', streamers);
