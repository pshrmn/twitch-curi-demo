<template>
  <div class='featured'>
    <Featuring :streamer='activeFeatured' />
    <div class='carousel'>
      <div
        v-for="(streamer, index) in streamers"
        :key="streamer.username"
        :class="{ 'featured-thumbnail': true, 'active': index === active }"
        v-on:click="active = index"
      >
        <div class='viewers'>{{streamer.watching}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Featuring from './Featuring';

  export default {
    name: 'Featured',
    props: ['streamers'],
    data() {
      return {
        active: 0
      };
    },
    computed: {
      activeFeatured() {
        return this.streamers[this.active];
      }
    },
    components: {
      Featuring
    }
  };
</script>

<style>
  .featured {
    width: 60vw;
    margin: 25px auto 0;
    background: #222233;
    padding: 10px;
    box-sizing: border-box;
  }
  .carousel {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .featured-thumbnail {
    width: 135px;
    height: 75px;
    background: #ccc;
    margin: 0 10px 0 0;
    position: relative;
    border: 2px solid #ccc;
  }

  .active {
    border-color: orange;
  }

  .viewers {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .viewers::before {
    content: '';
    display: inline-block;
    background: red;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 0 3px;
  }
</style>
