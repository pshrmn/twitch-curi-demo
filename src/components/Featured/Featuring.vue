<template>
  <div class='featuring'>
    <div class='fake-video'></div>
    <div class='info'>
      <div class='user'>
        <Thumbnail
          width='50'
          height='50'
          v-bind='stream.colors'
        />
        <div class='user-container'>
          <h2>
            {{stream.username}}
          </h2>
          <h3>
            Playing <curi-link to='Game' :params='{ game: stream.playing.name }'>
              {{stream.playing.name}}
            </curi-link>
          </h3>
        </div>
      </div>
      <p>
        {{stream.description}}
        <curi-link to='Stream' :params='{ username: stream.username }'>
          Start watching!
        </curi-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Thumbnail from '../Thumbnail';

  export default {
    name: 'Feature',
    props: ['stream'],
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
    min-width: 0;
  }

  .user {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  .thumbnail {
    margin-right: 5px;
  }

  .user-container {
    min-width: 0;
  }

  .user-container h2 {
    font-size: 1.1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user h3 {
    font-size: 1em;
  }

  a {
    color: #ff6868
  }

  @media screen and (max-width: 1080px) {
    .featuring {
      flex-flow: column nowrap;
    }

    .fake-video {
      width: 100%;
      margin-bottom: 5px;
    }
  }
</style>
