<template>
  <div class='watching'>
    <font-awesome-icon :icon="user" /> {{prettyCount}}
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import { faUser } from '@fortawesome/fontawesome-free-solid';

  import fmt from '../utils/numberFormat';

  export default {
    name: 'Watching',
    props: ['count'],
    computed: {
      user: () => faUser,
      prettyCount() {
        return fmt(this.count);
      }
    },
    components: {
      FontAwesomeIcon
    }
  };
</script>

<style scoped>
  .watching {
    color: #e13333;
  }
</style>
