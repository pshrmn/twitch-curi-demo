import Vue from 'vue';
import Home from '@/pages/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    const h1 = vm.$el.querySelector('h1');
    expect(h1.textContent).toEqual('Home page');
  });
});
