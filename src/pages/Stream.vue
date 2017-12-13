<template>
  <div v-if="$curi.response.error">
    {{$curi.response.error}}
  </div>
  <div v-else>
    <UserTopBar :user="$curi.response.data.user" />
  </div>
</template>

<script>
  import UserTopBar from '../components/UserTopBar';

  export default {
    name: 'Stream',
    components: {
      UserTopBar
    }
  };
</script>

<style scoped>

</style>
