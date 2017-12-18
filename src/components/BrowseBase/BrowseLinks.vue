<template>
  <nav>
    <ul>
      <li>
        <curi-link to='Browse'>
          Games
        </curi-link>
      </li>
      <li>
        <curi-link to='Browse Popular'>
          Streams
        </curi-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'BrowseLinks'
  };
</script>

<style scoped>
  ul {
    display: flex;
    margin: 0;
    padding: 5px;
    list-style: none;
  }

  li {
    margin-right: 10px;
  }
</style>
