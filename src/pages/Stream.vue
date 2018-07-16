<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-else class='area'>
    <div class='main'>
      <UserTopBar :user="$curi.response.data.user" />
      <div class='content'>
        <VideoPlayer :stream="$curi.response.data.user"/>
      </div>
    </div>
    <Chat :stream="$curi.response.data.user"/>
  </div>
</template>

<script>
  import UserTopBar from '../components/UserTopBar';
  import VideoPlayer from '../components/VideoPlayer';
  import Chat from '../components/Chat';

  export default {
    name: 'Stream',
    computed: {
      error() {
        return this.$curi.response.data.error;
      },
      user() {
        return this.$curi.response.data.user;
      }
    },
    components: {
      UserTopBar,
      VideoPlayer,
      Chat
    }
  };
</script>

<style scoped>
  .area {
    display: flex;
    flex-flow: row nowrap;
  }

  .main {
    flex-grow: 2;
  }

  .content {
    padding: 20px 30px;
  }
</style>
