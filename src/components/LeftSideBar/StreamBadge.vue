<template>
  <div class='stream-info'>
    <curi-link to='Stream' :params="{ username: stream.username }">
      <Thumbnail width='35' height='35' v-bind="stream.colors" />
      <div class='stream' v-if="!hidden">
        <h4>{{stream.username}}</h4>
        <h5>{{stream.playing.name}}</h5>
      </div>
    </curi-link>
  </div>
</template>

<script>
  import Thumbnail from '../Thumbnail';

  export default {
    name: 'StreamBadge',
    props: ['stream', 'hidden'],
    components: {
      Thumbnail
    }
  };
</script>

<style scoped>
  .stream-info {
    margin: 3px 0;
  }
  .stream {
    display: inline-block;
  }
  h4, h5 {
    font-weight: normal;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

</style>
