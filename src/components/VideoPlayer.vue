<template>
  <div class='stream'>
    <div class='player'>
      <div class='controls'>
        <div class='left'>
          <font-awesome-icon :icon="play" />
          <font-awesome-icon :icon="volume" />
        </div>
        <div class='right'>
          <font-awesome-icon :icon="cog" />
          <font-awesome-icon :icon="expand" />
        </div>
      </div>
    </div>
    <div class='info'>
      <div class='stream-info'>
        <Thumbnail
          width='30'
          height='50'
          v-bind="game.colors"
        />
        <div>
          <div class='stream-title'>{{stream.title}}</div>
          <div>
            <curi-link to='Game' :params="{ game: game.name }">
              {{game.name}}
            </curi-link>
          </div>
        </div>
      </div>
      <div class='viewer-info'>
        <Watching :count="stream.watching" />
      </div>
    </div>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import {
    faPlay,
    faVolumeUp,
    faExpand,
    faCog
  } from '@fortawesome/fontawesome-free-solid';

  import Thumbnail from './Thumbnail';
  import Watching from './Watching';

  export default {
    name: 'VideoPlayer',
    props: ['stream'],
    computed: {
      game() {
        return this.stream.playing;
      },
      // icons
      play: () => faPlay,
      volume: () => faVolumeUp,
      expand: () => faExpand,
      cog: () => faCog
    },
    components: {
      Thumbnail,
      FontAwesomeIcon,
      Watching
    }
  };
</script>

<style scoped>
  .stream {
    width: 100%;
  }

  .player {
    width: 100%;
    padding-top: 50%;
    background: #222233;
    position: relative;
  }

  .controls {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 5px;
    color: #fff;
  }
  .controls svg {
    margin: 0 5px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .stream-info {
    display: flex;
  }

  .stream-title {
    font-size: 1.5em;
  }

  .thumbnail {
    margin-right: 10px;
  }
</style>
