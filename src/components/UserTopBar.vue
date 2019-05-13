<template>
  <div class='user-topbar'>
    <div class='info'>
      <curi-link name='Stream' :params="{ username: user.username }">
        {{user.username}}
      </curi-link>
      <p class='full'>Videos</p>
      <p class='full'>Clips</p>
      <p class='full'>Collections</p>
      <p class='full'>Events</p>
      <p class='partial'>Followers {{fmt(user.followers)}}</p>
      <p class='full'>Following</p>
    </div>
    <div class='love'>
      <button>Follow</button>
      <button>Subscribe</button>
    </div>
  </div>
</template>

<script>
  import fmt from '../utils/numberFormat';

  export default {
    name: 'UserTopBar',
    props: ['user'],
    methods: {
      fmt
    }
  };
</script>

<style scoped>
  .user-topbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 35px;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .info {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    max-width: 70%;
    overflow-x: hidden;
  }

  .info > * {
    padding: 10px;
  }

  .info > *:hover {
    border-bottom: 3px solid #e13333;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }

  .love {
    display: flex;
    flex-flow: row nowrap;
  }

  .love button {
    background: #222233;
    color: #fff;
    border: 0;
    padding: 5px 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1500px) {
    .full {
      display: none;
    }
  }

  @media screen and (max-width: 1100px) {
    .partial {
      display: none;
    }
  }
</style>
