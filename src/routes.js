import { prepareRoutes } from '@curi/router';
import { preferDefault } from '@curi/helpers';
import API from './utils/streamState';

export default prepareRoutes([
  {
    name: 'Home',
    path: '',
    resolve: {
      body: () => import('./pages/Home').then(preferDefault),
      featured: () => API.featuredStreams(10),
      games: () => API.topGames(10)
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: {
          featured: resolved.featured,
          games: resolved.games
        },
        title: 'Home'
      };
    }
  },
  {
    name: 'Browse',
    path: 'directory',
    resolve: {
      body: () => import('./pages/Browse').then(preferDefault),
      games: () => API.topGames()
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: {
          games: resolved.games
        },
        title: 'Browsing Games'
      };
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        resolve: {
          body: () => import('./pages/Popular').then(preferDefault),
          streams: () => API.topStream()
        },
        response({ resolved }) {
          return {
            body: resolved.body,
            data: {
              streams: resolved.streams
            },
            title: 'Popular Streams'
          };
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        resolve: {
          body: () => import('./pages/Game').then(preferDefault),
          streamers: ({ params }) => {
            try {
              return Promise.resolve({ streams: API.streamersPlaying(params.game) });
            } catch (e) {
              return Promise.resolve({ error: 'Game not found' });
            }
          }
        },
        response({ match, resolved }) {
          return {
            body: resolved.body,
            data: {
              ...resolved.streamers
            },
            title: `Browsing ${match.params.game}`
          };
        }
      }
    ]
  },
  {
    name: 'Stream',
    path: ':username',
    resolve: {
      body: () => import('./pages/Stream').then(preferDefault),
      user: ({ params }) => {
        const user = API.stream(params.username);
        if (user) {
          return Promise.resolve({ user });
        }
        return Promise.resolve({ error: 'The requested user could not be found.' });
      }
    },
    response({ match, error, resolved }) {
      if (error) {
        return {
          error
        };
      }
      return {
        body: resolved.body,
        title: match.params.username,
        data: {
          ...resolved.user
        }
      };
    }
  }
]);
