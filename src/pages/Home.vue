<template>
  <Featured :streamers="$curi.response.data.featured" />
</template>

<script>
  import Featured from '../components/Featured';

  export default {
    name: 'Home',
    components: {
      Featured
    }
  };
</script>
