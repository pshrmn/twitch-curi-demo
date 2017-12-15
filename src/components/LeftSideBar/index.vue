<template>
  <div :class="{ 'left-sidebar': true, hidden }">
    <div class='toggle' v-on:click="hidden = !hidden">
      {{hidden ? '&rarr;' : '&larr;'}}
    </div>
    <div class='content'>
      <div class='featured'>
        <h3 v-if="!hidden">Featured Streamers</h3>
        <h3 v-else>
          <font-awesome-icon :icon="camera" />
        </h3>
        <StreamBadge
          v-for="stream in featured"
          :key="stream.id"
          :stream="stream"
          :hidden="hidden"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import { faCamera } from '@fortawesome/fontawesome-free-solid';

  import API from '../../utils/streamState';
  import StreamBadge from './StreamBadge';

  export default {
    name: 'LeftSideBar',
    data() {
      return {
        featured: API.featuredStreams(5),
        hidden: false
      };
    },
    computed: {
      camera: () => faCamera
    },
    components: {
      StreamBadge,
      FontAwesomeIcon
    }
  };
</script>

<style scoped>
  .left-sidebar {
    background: #222233;
    width: 225px;
    flex-shrink: 0;
    height: calc(100vh - 50px);
    position: relative;
    margin-right: 25px;
    color: #ff6868;
  }

  .left-sidebar.hidden {
    width: 45px;
  }

  .toggle {
    position: absolute;
    right: -25px;
    width: 25px;
    height: 35px;
    background: #efefef;
    color: #e13333;
    font-size: 20px;
    line-height: 1.5em;
    cursor: pointer;
  }
  .content {
    padding: 15px 15px 0;
  }
  .hidden .content {
    padding: 15px 5px 0;
  }
  h3 {
    text-align: center;
  }
</style>
