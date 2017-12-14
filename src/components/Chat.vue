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
  function debounce(fn) {
    let timeout;
    let mostRecentArgs;
    return (...args) => {
      mostRecentArgs = args;
      if (!timeout) {
        fn(...mostRecentArgs);
        timeout = setTimeout(() => {
          timeout = null;
        }, 250);
      }
    };
  }

  export default {
    name: 'Chat',
    props: ['stream'],
    data() {
      return {
        hidden: false,
        forceScrolling: true
      };
    },
    watch: {
      stream(newStream, oldStream) {
        if (newStream !== oldStream) {
          oldStream.chat.stop();
          newStream.chat.start();
          this.forceScrolling = true;
          this.hidden = false;
        }
      }
    },
    mounted() {
      this.stream.chat.start();
      // when the user scrolls, turn off auto-scroll
      // when they scroll to the bottom of the element,
      // turn auto-scroll back on
      this.$refs.lines.addEventListener('scroll', debounce(() => {
        const lines = this.$refs.lines;
        const height = lines.scrollTop + lines.clientHeight;
        const bottom = lines.scrollHeight;

        this.forceScrolling = height/bottom > 0.95;
      }), false);
    },
    updated() {
      if (this.forceScrolling) {
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
