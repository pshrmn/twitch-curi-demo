<template>
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
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import { faPlay, faVolumeUp, faExpand, faCog } from '@fortawesome/fontawesome-free-solid';

  export default {
    name: 'VideoPlayer',
    computed: {
      play() {
        return faPlay;
      },
      volume() {
        return faVolumeUp;
      },
      expand() {
        return faExpand;
      },
      cog() {
        return faCog;
      }
    },
    components: {
      FontAwesomeIcon
    }
  };
</script>

<style>
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
    box-sizing: border-box;
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
</style>
