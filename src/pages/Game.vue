<template>
  <div>
    <h1>Browsing {{$curi.response.params.game}}</h1>
    <div
      v-for="streamer in $curi.response.data.streamers"
      :key="streamer.username"
    >
      <curi-link to='Stream' :params="{ username: streamer.username}">
        {{streamer.username}}
      </curi-link> - {{streamer.watching}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Game'
  };
</script>

<style scoped>

</style>
