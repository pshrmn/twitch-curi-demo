<template>
  <div>
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

</style>
