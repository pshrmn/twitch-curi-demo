<template>
  <div id="app">
    <TopBar />
    <component :is="$curi.response.body" />
  </div>
</template>

<script>
import TopBar from './components/TopBar';

export default {
  name: 'app',
  components: {
    TopBar
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
