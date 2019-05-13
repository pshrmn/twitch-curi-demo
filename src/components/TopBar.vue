<template>
  <div class='topbar'>
    <nav>
      <curi-link name='Home' class='home'>Glitch!</curi-link>
      <curi-link name='Browse'>Browse</curi-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  };
</script>

<style scoped>
  .topbar {
    background: #e13333;
    height: 50px;
    width: 100vw;
    text-align: left;
    padding-left: 15px;
  }
  nav {
    padding: 10px 0;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    margin-right: 15px;
  }
  nav a.home {
    font-size: 2em;
  }
</style>
