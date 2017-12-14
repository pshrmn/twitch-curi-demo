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
        <Thumbnail width='30' height='50' primary='red' secondary='orange' />
        <div>
          <div class='stream-title'>{{stream.title}}</div>
          <div>
            <curi-link to='Game' :params="{ game: stream.playing.name }">
              {{stream.playing.name}}
            </curi-link>
          </div>
        </div>
      </div>
      <div class='viewer-info'>
        <div class='watching'><font-awesome-icon :icon="user" /> {{stream.watching}}</div>
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
    faCog,
    faUser
  } from '@fortawesome/fontawesome-free-solid';

  import Thumbnail from './Thumbnail';

  export default {
    name: 'VideoPlayer',
    props: ['stream'],
    computed: {
      play: () => faPlay,
      volume: () => faVolumeUp,
      expand: () => faExpand,
      cog: () => faCog,
      user: () => faUser
    },
    components: {
      Thumbnail,
      FontAwesomeIcon
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

  .watching {
    color: #e13333;
  }
</style>
