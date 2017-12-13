<template>
  <div class='featuring'>
    <div class='fake-video'></div>
    <div class='info'>
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
</template>

<script>
  export default {
    name: 'Feature',
    props: ['streamer']
  };
</script>

<style>
  .featuring {
    display: flex;
    margin-bottom: 10px;
  }
  .fake-video {
    width: 600px;
    height: 350px;
    background: orange;
  }
  .info {
    color: #efefef;
    padding: 0 15px;
  }
</style>
