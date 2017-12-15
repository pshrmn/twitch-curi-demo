import API from './utils/streamState';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      initial: () => import('./pages/Home')
        .then(module => module.default),
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
      initial: () => import('./pages/Browse')
        .then(module => module.default),
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
          initial: () => import('./pages/Popular')
            .then(module => module.default),
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
          initial: () => import('./pages/Game')
            .then(module => module.default),
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
      initial: () => import('./pages/Stream')
        .then(module => module.default),
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
