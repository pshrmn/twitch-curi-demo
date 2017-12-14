<template>
  <div class='contents'>
    <Featured :streamers="$curi.response.data.featured" />
    <div class='featured-games'>
      <h2>Featured Games</h2>
      <GamesList :games="$curi.response.data.games" />  
    </div>
  </div>
</template>

<script>
  import Featured from '../components/Featured';
  import GamesList from '../components/GamesList';

  export default {
    name: 'Home',
    components: {
      Featured,
      GamesList
    }
  };
</script>

<style scoped>
  .contents {
    width: 60vw;
    margin: 25px auto 0;
  }

  .featured-games {
    margin: 50px auto 0;
    width: 90%;
  }
</style>
