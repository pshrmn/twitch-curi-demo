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
    match: {
      initial: () => autoResolve(import('./pages/Home')),
      every() {
        return Promise.all([
          API.featuredStreams(10),
          API.topGames(10)
        ]);
      },
      response({ resolved, set }) {
        set.body(resolved.initial);
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
      initial: () => autoResolve(import('./pages/Browse')),
      every() {
        return API.topGames();
      },
      response({ resolved, set }) {
        set.body(resolved.initial);
        set.data({ games: resolved.every });
        set.title('Browsing Games');
      }
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        match: {
          initial: () => autoResolve(import('./pages/Popular')),
          every: () => API.topStream(),
          response({ resolved, set }) {
            set.body(resolved.initial);
            set.title('Popular Streams');
            set.data({ streams: resolved.every });
          }
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        match: {
          initial: () => autoResolve(import('./pages/Game')),
          every({ params }) {
            try {
              return API.streamersPlaying(params.game);
            } catch (e) {
              return Promise.reject('Game not found');
            }
          },
          response({ route, resolved, set }) {
            set.body(resolved.initial);
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
      initial: () => autoResolve(import('./pages/Stream')),
      every({ params }) {
        const user = API.stream(params.username);
        if (user) {
          return Promise.resolve({ user });
        }
        return Promise.resolve({ error: 'The requested user could not be found.' });
      },
      response({ route, resolved, set }) {
        set.body(resolved.initial);
        set.title(route.params.username);
        const { user, error } = resolved.every;
        if (error) {
          set.error(error);
        } else {
          set.data({ user });
        }
      }
    }
  }
];
