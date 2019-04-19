import { prepareRoutes } from '@curi/router';
import { preferDefault } from '@curi/helpers';
import API from './utils/streamState';

export default prepareRoutes({
  routes: [
    {
      name: 'Home',
      path: '',
      resolve() {
        return Promise.all([
          import('./pages/Home').then(preferDefault),
          API.featuredStreams(10),
          API.topGames(10)
        ]);
      },
      respond({ resolved }) {
        const [body, featured, games] = resolved;
        return {
          body,
          data: {
            featured,
            games
          },
          meta: {
            title: 'Home'
          }
        };
      }
    },
    {
      name: 'Browse',
      path: 'directory',
      resolve() {
        return Promise.all([
          import('./pages/Browse').then(preferDefault),
          API.topGames()
        ]);
      },
      respond({ resolved }) {
        const [body, games] = resolved;
        return {
          body,
          data: {
            games
          },
          meta: {
            title: 'Browsing Games'
          }
        };
      },
      children: [
        {
          name: 'Browse Popular',
          path: 'all',
          resolve() {
            return Promise.all([
              import('./pages/Popular').then(preferDefault),
              API.topStream()
            ]);
          },
          respond({ resolved }) {
            const [body, streams] = resolved;
            return {
              body,
              data: {
                streams
              },
              meta: {
                title: 'Popular Streams'
              }
            };
          }
        },
        {
          name: 'Game',
          path: 'game/:game',
          resolve({ params }) {
            return Promise.all([
              import('./pages/Game').then(preferDefault),
              new Promise((resolve) => {
                const streams = API.streamersPlaying(params.game);
                resolve(streams.length ? { streams } : { error: 'Game not found' });
              })
            ]);
          },
          respond({ match, resolved }) {
            const [body, streams] = resolved;
            return {
              body,
              data: {
                ...streams
              },
              meta: {
                title: `Browsing ${match.params.game}`
              }
            };
          }
        }
      ]
    },
    {
      name: 'Stream',
      path: ':username',
      resolve({ params }) {
        return Promise.all([
          import('./pages/Stream').then(preferDefault),
          new Promise((resolve) => {
            const user = API.stream(params.username);
            if (user) {
              resolve({ user });
            }
            resolve({ error: 'The requested user could not be found.' });
          })
        ]);
      },
      respond({ match, error, resolved }) {
        if (error) {
          return {
            error
          };
        }
        const [body, user] = resolved;
        return {
          body,
          data: {
            ...user
          },
          meta: {
            title: match.params.username
          }
        };
      }
    }
  ]
});
