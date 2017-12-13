// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import createConfig from '@curi/core';
import Browser from '@hickory/browser';
import { installCuri } from '@curi/vue';
import createTitleSideEffect from '@curi/side-effect-title';

import routes from './routes';
import App from './App';

const history = Browser();
const title = createTitleSideEffect({ suffix: 'Glitch!', delimiter: '|' });
const config = createConfig(history, routes, {
  sideEffects: [{ fn: title }]
});
installCuri(Vue, config);

Vue.config.productionTip = false;

config.respond(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  });
}, { once: true });
