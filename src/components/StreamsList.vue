<template>
  <div
    class="stream"
  >
    <div>
      <curi-link name='Stream' :params="{ username: stream.username}">
        <Thumbnail
          width='150'
          height='200'
          v-bind="stream.colors"
        />
      </curi-link>
    </div>
    <div>
      <curi-link class='title' name='Stream' :params="{ username: stream.username}">
        {{stream.username}}
      </curi-link>
      <p>{{fmt(stream.watching)}} Viewers</p>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../components/Thumbnail';
  import fmt from '../utils/numberFormat';

  export default {
    name: 'StreamsList',
    props: ['stream'],
    components: {
      Thumbnail
    },
    methods: {
      fmt
    }
  };
</script>

<style scoped>
  .stream {
    width: 150px;
    margin: 0 10px 10px 0;
  }

  a.title {
    color: #2c3e50;
    display: block;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    color: #999;
    font-size: 0.9em;
  }
</style>
