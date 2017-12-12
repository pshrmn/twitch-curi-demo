import Home from './components/Home';
import Browse from './components/Browse';

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
