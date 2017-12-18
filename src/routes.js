import API from './utils/streamState';

// Vue auto-resolves import()s to return module.default,
// and CodeSandbox simulates the Vue behavior. This
// function allows us to work with either the full module
// contents or just the already-resolved default value.
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
          response({ resolved, set }) {
            set.body(resolved.initial);
            set.tiel('Browsing Popular Streams');
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
