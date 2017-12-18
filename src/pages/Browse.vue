<template>
  <BrowseBase>
    <h1>Browsing Popular Games</h1>
    <GamesList :games='$curi.response.data.games' />
  </BrowseBase>
</template>

<script>
  import BrowseBase from '../components/BrowseBase';
  import GamesList from '../components/GamesList';

  export default {
    name: 'Browse',
    components: {
      BrowseBase,
      GamesList
    }
  };
</script>

<style scoped>
</style>
