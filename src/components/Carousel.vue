<template>
  <div class='carousel'>
    <button v-on:click="scrollLeft()">&lt;</button>
    <div class='items' ref='items'>
      <slot></slot>
    </div>
    <button v-on:click="scrollRight()">&gt;</button>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        left: 0
      };
    },
    methods: {
      scrollLeft() {
        const parentWidth = this.$refs.items.offsetWidth;
        const offset = parentWidth >= 290 ? 290 : 145;
        this.$refs.items.scrollLeft -= offset;
      },
      scrollRight() {
        const parentWidth = this.$refs.items.offsetWidth;
        const offset = parentWidth >= 290 ? 290 : 145;
        this.$refs.items.scrollLeft += offset;
      }
    }
  };
</script>

<style scoped>
  .carousel {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    width: 100%;
    height: 75px;
  }

  .items {
    display: flex;
    flex-flow: row nowrap;
    flex: 2 0;
    overflow-x: hidden;
  }

  button {
    height: 100%;
    display: block;
    margin: 0 3px;
  }
</style>
