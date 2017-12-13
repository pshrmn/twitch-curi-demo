<template>
  <div :class="{ 'left-sidebar': true, hidden }">
    <div class='toggle' v-on:click="hidden = !hidden">
      {{hidden ? '>' : '<'}}
    </div>
    <div class='content'>
      <div class='featured'>
        <h2>Featured Streamers</h2>
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
    background: orangered;
    max-width: 200px;
    height: calc(100vh - 50px);
    position: relative;
    margin-right: 25px;
    color: #fff;
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
    height: 25px;
    background: #222233;
    font-size: 20px;
  }

  a {
    color: #fff;
  }

  .content {
    padding: 0 15px;
  }
</style>
