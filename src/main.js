// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { createRouter } from '@curi/router';
import { browser } from '@hickory/browser';
import { CuriPlugin } from '@curi/vue';
import createTitleSideEffect from '@curi/side-effect-title';

import routes from './routes';
import App from './App';

const title = createTitleSideEffect(({ response }) => `${response.meta.title} | Glitch!`);

const router = createRouter(browser, routes, {
  sideEffects: [title]
});

Vue.use(CuriPlugin, { router });
Vue.config.productionTip = false;

router.once(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  });
});
