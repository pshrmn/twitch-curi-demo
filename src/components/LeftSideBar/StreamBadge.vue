<template>
  <div class='stream-info'>
    <curi-link name='Stream' :params="{ username: stream.username }">
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

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    flex-flow: row nowrap;
  }

  .stream {
    margin-left: 5px;
  }

  h4, h5 {
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;
  }

</style>
