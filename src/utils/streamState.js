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

const API = {
  games(sort) {
    if (sort) {
      const gamesCopy = [...games];
      gamesCopy.sort(sort);
      return gamesCopy;
    }
    return games;
  },
  topGames(count) {
    return this.games(
      (a, b) => b.watching - a.watching
    ).slice(0, count);
  },
  streamers(sort) {
    if (sort) {
      const streamersCopy = [...streamers];
      streamersCopy.sort(sort);
      return streamersCopy;
    }
    return streamers;
  },
  topStreamers(count) {
    return this.streamers(
      (a, b) => b.watching - a.watching
    ).slice(0, count);
  },
  featuredStreamers(count) {
    return this.streamers(
      () => (Math.random() > 0.5 ? 1 : -1)
    ).slice(0, count);
  }
};

export default API;
