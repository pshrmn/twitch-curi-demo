import Home from './pages/Home';
import Browse from './pages/Browse';
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
      }
    }
  },
  {
    name: 'Browse',
    path: 'browse',
    match: {
      response({ set }) {
        set.body(Browse);
      }
    }
  }
];
