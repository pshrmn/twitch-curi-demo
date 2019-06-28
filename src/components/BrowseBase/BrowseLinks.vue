<template>
  <nav>
    <ul>
      <li>
        <active-link name='Browse' :partial='true'>
          Games
        </active-link>
      </li>
      <li>
        <active-link name='Browse Popular'>
          Streams
        </active-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import ActiveLink from '../ActiveLink';

  export default {
    name: 'BrowseLinks',
    components: {
      'active-link': ActiveLink
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
