// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { curi } from '@curi/router';
import Browser from '@hickory/browser';
import { CuriPlugin } from '@curi/vue';
import createTitleSideEffect from '@curi/side-effect-title';
import active from '@curi/route-active';

import routes from './routes';
import App from './App';

const history = Browser();
const title = createTitleSideEffect({ suffix: 'Glitch!', delimiter: '|' });
const router = curi(history, routes, {
  route: [active()],
  sideEffects: [title]
});

Vue.use(CuriPlugin, { router });
Vue.config.productionTip = false;

router.respond(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  });
});
