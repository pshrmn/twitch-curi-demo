<template>
  <div class='user-topbar'>
    <div class='info'>
      <curi-link to='Stream' :params="{ username: user.username }">
        {{user.username}}
      </curi-link>
      <p>
        Followers: {{user.followers}}
      </p>
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

<style>
  .user-topbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;
  }

  .info {
    display: flex;
    flex-flow: row nowrap;
  }

  .love button {
    background: #222233;
    color: #fff;
    border: 0;
    box-sizing: border-box;
    padding: 5px 10px;
  }
</style>
