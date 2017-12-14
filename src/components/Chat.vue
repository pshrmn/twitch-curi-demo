<template>
  <div class='chat'>
    <div
      v-for="line in stream.chat.chatLines"
      :key="line.key"
      class="line"
    >
      <span class='username'>{{line.username}}:</span> {{line.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['stream'],
    watch: {
      stream(newStream, oldStream) {
        if (newStream !== oldStream) {
          oldStream.chat.stop();
          newStream.chat.start();
        }
      }
    },
    mounted() {
      this.stream.chat.start();
    },
    destroyed() {
      this.stream.chat.stop();
    }
  };
</script>

<style scoped>
  .chat {
    border-left: 1px solid #222233;
    width: 300px;
    height: calc(100vh - 50px);
    padding: 5px;
    overflow-y: scroll;
    vertical-align: bottom;
  }

  .line {
    margin-bottom: 5px;
  }

  span.username {
    font-weight: bold;
  }
</style>
