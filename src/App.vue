<template>
  <div id="app">
    <TopBar />
    <div class='content'>
      <LeftSideBar v-if="$curi.response.name !== 'Home'" />
      <main>
        <component :is="$curi.response.body" />
      </main>
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import LeftSideBar from './components/LeftSideBar';

export default {
  name: 'app',
  components: {
    TopBar,
    LeftSideBar
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
  color: #2c3e50;
  box-sizing: border-box;
}

h1, h2, h3 {
  margin: 3px 0;
}

h4, h5, h6 {
  margin: 2px 0;
}

p {
  margin: 0;
}

.content {
  display: flex;
  flex-flow: row nowrap;
}

main {
  flex-grow: 2;
}
</style>
