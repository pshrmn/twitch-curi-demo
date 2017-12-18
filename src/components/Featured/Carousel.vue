<template>
  <div class='carousel'>
    <button v-on:click="scrollLeft()">
      <font-awesome-icon :icon='leftArrow' />
    </button>
    <div class='items' ref='items'>
      <slot></slot>
    </div>
    <button v-on:click="scrollRight()">
      <font-awesome-icon :icon='rightArrow' />
    </button>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';

  export default {
    name: 'Carousel',
    data() {
      return {
        left: 0
      };
    },
    computed: {
      leftArrow: () => faChevronLeft,
      rightArrow: () => faChevronRight
    },
    methods: {
      scrollLeft() {
        const parentWidth = this.$refs.items.offsetWidth;
        const offset = parentWidth >= 250 ? 250 : 125;
        this.$refs.items.scrollLeft -= offset;
      },
      scrollRight() {
        const parentWidth = this.$refs.items.offsetWidth;
        const offset = parentWidth >= 250 ? 250 : 125;
        this.$refs.items.scrollLeft += offset;
      }
    },
    components: {
      FontAwesomeIcon
    }
  };
</script>

<style scoped>
  .carousel {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    width: 100%;
    height: 80px;
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
    color: #efefef;
    background: #8a2b33;
    border: 1px solid rgba(255,255,255,0.5);
  }
</style>
