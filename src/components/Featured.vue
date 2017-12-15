<template>
  <div class='featured'>
    <Featuring :stream='activeFeatured' />
    <Carousel>
      <div
        v-for="(stream, index) in streams"
        :key="stream.id"
        :class="{ 'featured-thumbnail': true, 'active': index === active }"
        v-on:click="active = index"
      >
        <div class='viewers'>{{stream.watching}}</div>
      </div>
    </Carousel>
  </div>
</template>

<script>
  import Featuring from './Featuring';
  import Carousel from './Carousel';

  export default {
    name: 'Featured',
    props: ['streams'],
    data() {
      return {
        active: 0
      };
    },
    computed: {
      activeFeatured() {
        return this.streams[this.active];
      }
    },
    components: {
      Featuring,
      Carousel
    }
  };
</script>

<style scoped>
  .featured {
    background: #222233;
    padding: 10px;
  }

  .featured-thumbnail {
    width: 135px;
    height: 75px;
    flex-shrink: 0;
    background: #ccc;
    margin: 0 10px 0 0;
    position: relative;
    border: 2px solid #ccc;
  }

  .active {
    border-color: #e13333;
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
