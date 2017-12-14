<template>
  <div class='featuring'>
    <div class='fake-video'></div>
    <div class='info'>
      <div class='user'>
        <Thumbnail
          width='50'
          height='50'
          v-bind='streamer.colors'
        />
        <div>
          <h2>
            {{streamer.username}}
          </h2>
          <h3>
            Playing <curi-link to='Game' :params='{ game: streamer.playing.name }'>
              {{streamer.playing.name}}
            </curi-link>
          </h3>
        </div>
      </div>
      <p>
        {{streamer.description}}
        <curi-link to='Stream' :params='{ username: streamer.username }'>
          Start watching!
        </curi-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Thumbnail from './Thumbnail';

  export default {
    name: 'Feature',
    props: ['streamer'],
    components: {
      Thumbnail
    }
  };
</script>

<style scoped>
  .featuring {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 10px;
  }
  .fake-video {
    width: 600px;
    height: 350px;
    background: #8a2b33;
    flex-shrink: 0;
  }
  .info {
    color: #efefef;
    padding: 0 15px;
  }

  .user {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  .thumbnail {
    margin-right: 5px;
  }

  .user h2 {
    font-size: 1.1em;
  }

  .user h3 {
    font-size: 1em;
  }

  a {
    color: #ff6868
  }
</style>
