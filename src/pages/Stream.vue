<template>
  <div v-if="$curi.response.error">
    {{$curi.response.error}}
  </div>
  <div v-else>
    <UserTopBar :user="$curi.response.data.user" />
    <div class='content'>
      <VideoPlayer />
    </div>
  </div>
</template>

<script>
  import UserTopBar from '../components/UserTopBar';
  import VideoPlayer from '../components/VideoPlayer';

  export default {
    name: 'Stream',
    components: {
      UserTopBar,
      VideoPlayer
    }
  };
</script>

<style scoped>
  .content {
    padding: 20px 30px;
  }
</style>
