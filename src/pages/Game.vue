<template>
  <div>
    <h1>Browsing {{$curi.response.params.game}}</h1>
    <div class='stream-list'>
      <div
        v-for="streamer in $curi.response.data.streamers"
        :key="streamer.username"
        class="stream"
      >
        <div>
          <curi-link to='Stream' :params="{ username: streamer.username}">
            <Thumbnail
              width='150'
              height='200'
              :primary='streamer.colors.primary'
              :secondary='streamer.colors.secondary'
            />
          </curi-link>
        </div>
        <div>
          <curi-link to='Stream' :params="{ username: streamer.username}">
            {{streamer.username}}
          </curi-link>
          <p>{{streamer.watching}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../components/Thumbnail';

  export default {
    name: 'Game',
    components: {
      Thumbnail
    }
  };
</script>

<style scoped>
  .stream-list {
    display: flex;
    flex-flow: row wrap;
  }
  .stream {
    width: 150px;
    margin: 0 10px 10px 0;
  }
</style>
