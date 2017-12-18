<template>
  <nav>
    <ul>
      <li>
        <curi-link to='Browse' :active="{ merge }">
          Games
        </curi-link>
      </li>
      <li>
        <curi-link to='Browse Popular' :active="{ merge }">
          Streams
        </curi-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  function merge(props) {
    // eslint-disable-next-line no-param-reassign
    props.class = 'active';
    return props;
  }

  export default {
    name: 'BrowseLinks',
    methods: {
      merge
    }
  };
</script>

<style scoped>
  ul {
    display: flex;
    height: 35px;
    align-items: flex-end;
    margin: 0;
    padding: 5px;
    list-style: none;
  }

  li {
    margin-right: 10px;
  }

  a {
    color: #2c3e50;
  }

  a.active {
    color: #e13333;
  }
</style>
