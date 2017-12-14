<template>
  <div>
    <h1>Browsing</h1>
    <div class='games-list'>
      <div
        v-for="game in $curi.response.data.games"
        :key="game.name"
        class='game'
      >
        <div>
          <curi-link to='Game' :params="{ game: game.name }">
            <Thumbnail
              width='150'
              height='200'
              v-bind="game.colors"
            />
          </curi-link>
        </div>
        <div>
          <curi-link to='Game' :params="{ game: game.name }">
            {{game.name}}
          </curi-link>
          <p>{{game.watching}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../components/Thumbnail';

  export default {
    name: 'Browse',
    components: {
      Thumbnail
    }
  };
</script>

<style scoped>
  .games-list {
    display: flex;
    flex-flow: row wrap;
  }
  .game {
    width: 150px;
    margin: 0 10px 10px 0;
  }
</style>
