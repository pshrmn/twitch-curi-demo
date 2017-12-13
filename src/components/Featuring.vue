<template>
  <div class='featuring'>
    <div class='fake-video'></div>
    <div class='info'>
      {{streamer.username}} is playing {{streamer.playing.name}}
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
