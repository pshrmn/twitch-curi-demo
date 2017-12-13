<template>
  <div class='user-topbar'>
    <div class='info'>
      <curi-link to='Stream' :params="{ username: user.username }">
        {{user.username}}
      </curi-link>
      <p>Videos</p>
      <p>Clips</p>
      <p>Collections</p>
      <p>Events</p>
      <p>Followers {{user.followers}}</p>
      <p>Following</p>
    </div>
    <div class='love'>
      <button>Follow</button>
      <button>Subscribe</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserTopBar',
    props: ['user']
  };
</script>

<style scoped>
  .user-topbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 35px;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .info {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
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

  .love button {
    background: #222233;
    color: #fff;
    border: 0;
    padding: 5px 10px;
    margin-right: 10px;
  }
</style>
