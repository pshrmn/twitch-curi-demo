import Home from './pages/Home';
import Browse from './pages/Browse';

export default [
  {
    name: 'Home',
    path: '',
    match: {
      response({ set }) {
        set.body(Home);
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
