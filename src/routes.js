import API from './utils/streamState';

// The vue-loader used by CodeSandbox compiles
// to CommonJS, so we need to handle modules
// with no default property
const autoResolve = pr => (
  pr.then(module => (
    // eslint-disable-next-line no-underscore-dangle
    module.__esModule && module.default
      ? module.default
      : module
  ))
);

export default [
  {
    name: 'Home',
    path: '',
    on: {
      initial: () => autoResolve(import('./pages/Home')),
      every() {
        return Promise.all([
          API.featuredStreams(10),
          API.topGames(10)
        ]);
      }
    },
    response({ resolved }) {
      return {
        body: resolved.initial,
        data: {
          featured: resolved.every[0],
          games: resolved.every[1]
        },
        title: 'Home'
      };
    }
  },
  {
    name: 'Browse',
    path: 'directory',
    on: {
      initial: () => autoResolve(import('./pages/Browse')),
      every: () => API.topGames()
    },
    response({ resolved }) {
      return {
        body: resolved.initial,
        data: {
          games: resolved.every
        },
        title: 'Browsing Games'
      };
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        on: {
          initial: () => autoResolve(import('./pages/Popular')),
          every: () => API.topStream()
        },
        response({ resolved }) {
          return {
            body: resolved.initial,
            data: {
              streams: resolved.every
            },
            title: 'Popular Streams'
          };
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        on: {
          initial: () => autoResolve(import('./pages/Game')),
          every({ params }) {
            try {
              return API.streamersPlaying(params.game);
            } catch (e) {
              return Promise.reject('Game not found');
            }
          }
        },
        response({ match, resolved }) {
          return {
            body: resolved.initial,
            data: {
              streams: resolved.every
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
    on: {
      initial: () => autoResolve(import('./pages/Stream')),
      every({ params }) {
        const user = API.stream(params.username);
        if (user) {
          return Promise.resolve(user);
        }
        return Promise.reject('The requested user could not be found.');
      }
    },
    response({ match, resolved }) {
      const modifiers = {
        body: resolved.initial,
        title: match.params.username
      };
      if (resolved.error) {
        modifiers.error = resolved.error;
      } else {
        modifiers.data = {
          user: resolved.every
        };
      }
      return modifiers;
    }
  }
];
