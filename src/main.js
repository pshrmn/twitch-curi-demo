// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { createRouter, announce, title } from '@curi/router';
import { browser } from '@hickory/browser';
import { CuriPlugin } from '@curi/vue';

import routes from './routes';
import App from './App';

const router = createRouter(browser, routes, {
  sideEffects: [
    announce(({ response }) => `Navigated to ${response.meta.title}`),
    title(({ response }) => `${response.meta.title} | Glitch!`)
  ]
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
