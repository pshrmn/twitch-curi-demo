<template>
  <div v-if="error">
    {{error}}
  </div>
  <BrowseBase v-else>
    <h1>Browsing {{$curi.response.params.game}}</h1>
    <div class='stream-list'>
      <StreamsList
        v-for="stream in streams"
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
    name: 'Game',
    computed: {
      error() {
        return this.$curi.response.data.error;
      },
      streams() {
        return this.$curi.response.data.streams;
      }
    },
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
