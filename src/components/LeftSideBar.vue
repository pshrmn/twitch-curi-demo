<template>
  <div :class="{ 'left-sidebar': true, hidden }">
    <div class='toggle' v-on:click="hidden = !hidden">
      {{hidden ? '&rarr;' : '&larr;'}}
    </div>
    <div class='content'>
      <div class='featured'>
        <h4>Featured Streamers</h4>
        <div
          v-for="streamer in featured"
          :key="streamer.username"
        >
          <curi-link to='Stream' :params="{ username: streamer.username }">
            {{streamer.username}}
          </curi-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '../utils/streamState';

  export default {
    name: 'LeftSideBar',
    data() {
      return {
        featured: API.featuredStreamers(5),
        hidden: false
      };
    }
  };
</script>

<style scoped>
  .left-sidebar {
    background: #222233;
    max-width: 200px;
    height: calc(100vh - 50px);
    position: relative;
    margin-right: 25px;
    color: #ff6868;
  }

  .left-sidebar.hidden {
    width: 50px;
  }

  .hidden .content {
    display: none;
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

  a {
    color: #fff;
  }

  .content {
    padding: 0 15px;
  }
</style>
