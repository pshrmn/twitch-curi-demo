<template>
  <div class='browsing-content'>
    <h1>Browsing {{$curi.response.params.game}}</h1>
    <div class='stream-list'>
      <div
        v-for="stream in $curi.response.data.streams"
        :key="stream.id"
        class="stream"
      >
        <div>
          <curi-link to='Stream' :params="{ username: stream.username}">
            <Thumbnail
              width='150'
              height='200'
              v-bind="stream.colors"
            />
          </curi-link>
        </div>
        <div>
          <curi-link class='title' to='Stream' :params="{ username: stream.username}">
            {{stream.username}}
          </curi-link>
          <p>{{fmt(stream.watching)}} Viewers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../components/Thumbnail';
  import fmt from '../utils/numberFormat';

  export default {
    name: 'Game',
    components: {
      Thumbnail
    },
    methods: {
      fmt
    }
  };
</script>

<style scoped>
  .browsing-content {
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }

  .stream-list {
    display: flex;
    flex-flow: row wrap;
  }
  .stream {
    width: 150px;
    margin: 0 10px 10px 0;
  }

  a.title {
    color: #2c3e50;
    text-decoration: none;
  }

  p {
    color: #999;
    font-size: 0.9em;
  }
</style>
