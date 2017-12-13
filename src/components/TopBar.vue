<template>
  <div class='topbar'>
    <nav>
      <curi-link to='Home' class='home'>Glitch</curi-link>
      <curi-link to='Browse'>Browse</curi-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  };
</script>

<style>
  .topbar {
    background: #222233;
    height: 50px;
    width: 100vw;
    text-align: left;
  }
  .topbar a {
    color: #fff;
    text-decoration: none;
  }
  .topbar a.home {
    font-size: 2em;
  }
</style>
