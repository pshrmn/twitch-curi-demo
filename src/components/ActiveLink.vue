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
export default {
  name: 'active-links',
  props: ['name', 'params', 'search', 'hash', 'state', 'partial'],
  computed: {
    classes() {
      return this.$router.route.active(
        this.name,
        this.$curi.response,
        this.params,
        this.partial
      )
        ? 'active'
        : '';
    }
  }
};
</script>
