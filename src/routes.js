import Home from './pages/Home';
import Browse from './pages/Browse';
import Popular from './pages/Popular';
import Game from './pages/Game';

import API from './utils/streamState';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      every() {
        return Promise.resolve(
          API.featuredStreamers(5)
        );
      },
      response({ resolved, set }) {
        set.body(Home);
        set.data({ featured: resolved.every });
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
            set.data({ streamers: resolved.every });
            set.title(`Browsing ${route.params.game}`);
          }
        }
      }
    ]
  }
];
