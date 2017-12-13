<template>
  <div>
    <h1>Browsing</h1>
    <div
      v-for="game in $curi.response.data.games"
      :key="game.name"
    >
      <curi-link to='Game' :params="{ game: game.name }">{{game.name}}</curi-link> - {{game.watching}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Browse'
  };
</script>
