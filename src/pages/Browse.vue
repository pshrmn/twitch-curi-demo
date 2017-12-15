<template>
  <div class='browsing-content'>
    <h1>Browsing</h1>
    <GamesList :games='$curi.response.data.games' />
  </div>
</template>

<script>
  import GamesList from '../components/GamesList';

  export default {
    name: 'Browse',
    components: {
      GamesList
    }
  };
</script>

<style scoped>
  .browsing-content {
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }
</style>
