<template>
  <div class='browsing-content'>
    <BrowseLinks />
    <slot></slot>
  </div>
</template>

<script>
  import BrowseLinks from './BrowseLinks';

  export default {
    name: 'BrowseBase',
    components: {
      BrowseLinks
    }
  };
</script>

<style scoped>
  .browsing-content {
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }
</style>
