<template>
  <div :class="{ 'chat': true, hidden }">
    <div class='toggle' v-on:click="hidden = !hidden">
      {{hidden ? '&larr;' : '&rarr;'}}
    </div>
    <div class='lines' ref='lines'>
      <div
        v-for="line in stream.chat.chatLines"
        :key="line.key"
        class="line"
      >
        <span class='username'>{{line.username}}:</span> {{line.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['stream'],
    data() {
      return {
        hidden: false
      };
    },
    watch: {
      stream(newStream, oldStream) {
        if (newStream !== oldStream) {
          oldStream.chat.stop();
          newStream.chat.start();
          this.hidden = false;
        }
      }
    },
    mounted() {
      this.stream.chat.start();
    },
    updated() {
      const lines = this.$refs.lines;
      const height = lines.scrollTop + lines.clientHeight;
      const bottom = lines.scrollHeight;
      // This threshold might need to be tweaked. The first
      // message that extends beyond the natural height, if
      // significantly long, will break this. Another check
      // here may be useful to prevent this, but I'm not
      // bothering with it for the time being.
      const nearBottom = height/bottom > 0.9;
      if (nearBottom) {
        this.$refs.lines.scrollTop = this.$refs.lines.scrollHeight;
      }
    },
    destroyed() {
      this.stream.chat.stop();
    }
  };
</script>

<style scoped>
  .chat {
    height: calc(100vh - 50px);
    margin-left: 25px;
    position: relative;
  }

  .chat.hidden {
    width: 0px;
  }

  .lines {
    width: 300px;
    border-left: 1px solid #222233;
    height: 100%;
    padding: 5px;
    overflow-y: scroll;
  }

  .line {
    margin-bottom: 5px;
  }

  span.username {
    font-weight: bold;
  }

  .toggle {
    position: absolute;
    left: -25px;
    width: 25px;
    height: 35px;
    background: #efefef;
    color: #e13333;
    font-size: 20px;
    line-height: 1.5em;
    cursor: pointer;
  }
</style>
