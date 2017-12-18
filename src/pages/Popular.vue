<template>
  <BrowseBase>
    <h1>Browsing Popular Streams</h1>
    <div class='stream-list'>
      <StreamsList
        v-for="stream in $curi.response.data.streams"
        :key="stream.id"
        :stream="stream"
      />
    </div>
  </BrowseBase>
</template>

<script>
  import BrowseBase from '../components/BrowseBase';
  import StreamsList from '../components/StreamsList';

  export default {
    name: 'Popular',
    components: {
      BrowseBase,
      StreamsList
    }
  };
</script>

<style scoped>
  .stream-list {
    display: flex;
    flex-flow: row wrap;
  }
</style>
