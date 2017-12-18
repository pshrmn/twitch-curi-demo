<template>
  <div class='featured'>
    <Featuring :stream='activeFeatured' />
    <Carousel>
      <div
        v-for="(stream, index) in streams"
        :key="stream.id"
        :class="{ 'featured-stream': true, 'active': index === active }"
        v-on:click="active = index"
      >
        <div class='thumb-holder'>
          <div class='overlay'></div>
          <Thumbnail width='118' height='73' v-bind='stream.colors' />
          <div class='viewers'>{{stream.watching}}</div>
        </div>
        <div class='underbar'></div>
      </div>
    </Carousel>
  </div>
</template>

<script>
  import Featuring from './Featuring';
  import Carousel from './Carousel';
  import Thumbnail from '../Thumbnail';

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
      Carousel,
      Thumbnail
    }
  };
</script>

<style scoped>
  .featured {
    background: #222233;
    padding: 10px;
  }

  .featured-stream {
    width: 120px;
    height: 75px;
    flex-shrink: 0;
    background: transparent;
    margin: 0 5px 0 0;
  }

  .thumb-holder {
    position: relative;
    width: 120px;
    height: 75px;
    border: 1px solid transparent;
  }

  .active .thumb-holder{
    border-color: #e13333;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }

  .viewers {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 3px 3px 0 0;
    color: #fff;
    font-size: 12px;
  }
  .viewers::before {
    content: '';
    display: inline-block;
    background: #e13333;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 0 3px;
  }

  .underbar {
    width: 118px;
    margin: 2px 2px 0;
    height: 2px;
    background: #8a2b33;
  }

  .active .underbar {
    background: #e13333;
    width: 120px;
    margin: 2px 0 0;
  }
</style>
