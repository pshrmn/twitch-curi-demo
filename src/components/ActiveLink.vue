<template>
  <curi-link
    :name='name'
    :params='params'
    :class='classes'
  >
    <slot></slot>
  </curi-link>
</template>

<script>
import { active } from '@curi/interactions';

export default {
  name: 'active-links',
  props: ['name', 'params', 'search', 'hash', 'state', 'partial'],
  computed: {
    classes() {
      const route = this.$router.route(this.name);
      return active(
        route,
        this.$curi.response,
        { params: this.params, partial: this.partial }
      )
        ? 'active'
        : '';
    }
  }
};
</script>
