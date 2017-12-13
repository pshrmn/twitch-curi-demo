import { rand } from './random';
import { game } from './gameGenerator';
import { streamer } from './streamerGenerator';

const GAMES = [];
for (let g = 0; g < 20; g++) {
  GAMES.push({
    name: game(),
    watching: 0
  });
}

const STREAMERS = [];
for (let g=0; g<100; g++) {
  const s = streamer();
  STREAMERS.push(s);

  const playing = GAMES[rand(GAMES.length)];
  s.playing = playing;
  playing.watching += s.watching;
}

const emptyFilter = n => n;
const mostWatchers = (a, b) => b.watching - a.watching;

const API = {
  games(filter, sort) {
    const filtered = GAMES.filter(filter);
    if (sort) {
      filtered.sort(sort);
    }
    return filtered;
  },
  topGames(count) {
    return this.games(
      emptyFilter,
      mostWatchers
    ).slice(0, count);
  },
  streamers(filter = emptyFilter, sort) {
    const filtered = STREAMERS.filter(filter);
    if (sort) {
      filtered.sort(sort);
    }
    return filtered;
  },
  topStreamers(count) {
    return this.streamers(
      emptyFilter,
      mostWatchers
    ).slice(0, count);
  },
  featuredStreamers(count) {
    return this.streamers(
      emptyFilter,
      () => (Math.random() > 0.5 ? 1 : -1)
    ).slice(0, count);
  },
  streamersPlaying(name) {
    return this.streamers(
      s => s.playing.name === name,
      mostWatchers
    );
  }
};

export default API;
