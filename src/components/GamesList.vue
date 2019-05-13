<template>
  <div class='games-list'>
    <div
      v-for="game in games"
      :key="game.id"
      class='game'
    >
      <div>
        <curi-link name='Game' :params="{ game: game.name }">
          <Thumbnail
            width='150'
            height='200'
            v-bind="game.colors"
          />
        </curi-link>
      </div>
      <div>
        <curi-link class='title' name='Game' :params="{ game: game.name }">
          {{game.name}}
        </curi-link>
        <p>{{fmt(game.watching)}} Viewers</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../components/Thumbnail';
  import fmt from '../utils/numberFormat';

  export default {
    name: 'GamesList',
    props: ['games'],
    components: {
      Thumbnail
    },
    methods: {
      fmt
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

  a.title {
    color: #2c3e50;
    display: block;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    color: #999;
    font-size: 0.9em;
  }
</style>
