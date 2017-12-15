import Home from './pages/Home';
import Browse from './pages/Browse';
import Popular from './pages/Popular';
import Game from './pages/Game';
import Stream from './pages/Stream';

import API from './utils/streamState';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      every() {
        return Promise.all([
          API.featuredStreams(10),
          API.topGames(10)
        ]);
      },
      response({ resolved, set }) {
        set.body(Home);
        set.data({
          featured: resolved.every[0],
          games: resolved.every[1]
        });
        set.title('Home');
      }
    }
  },
  {
    name: 'Browse',
    path: 'directory',
    match: {
      every() {
        return API.topGames();
      },
      response({ resolved, set }) {
        set.body(Browse);
        set.data({ games: resolved.every });
        set.title('Browsing Games');
      }
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        match: {
          response({ set }) {
            set.body(Popular);
            set.tiel('Browsing Popular Streams');
          }
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        match: {
          every({ params }) {
            try {
              return API.streamersPlaying(params.game);
            } catch (e) {
              return Promise.reject('Game not found');
            }
          },
          response({ route, resolved, set }) {
            set.body(Game);
            set.data({ streams: resolved.every });
            set.title(`Browsing ${route.params.game}`);
          }
        }
      }
    ]
  },
  {
    name: 'Stream',
    path: ':username',
    match: {
      every({ params }) {
        const user = API.stream(params.username);
        if (user) {
          return Promise.resolve(user);
        }
        return Promise.reject('The requested user could not be found.');
      },
      response({ route, error, resolved, set }) {
        set.body(Stream);
        set.title(route.params.username);
        if (error) {
          set.error(error);
        } else {
          set.data({ user: resolved.every });
        }
      }
    }
  }
];
