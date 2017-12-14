<template>
  <div class='thumbnail' :style="style"></div>
</template>

<script>
  export default {
    name: 'Thumbnail',
    props: ['width', 'height', 'top', 'right', 'bottom', 'left'],
    computed: {
      style() {
        return {
          'border-width': `${this.height/2}px ${this.width/2}px`,
          'border-style': 'solid',
          'border-color': `${this.top} ${this.right} ${this.bottom} ${this.left}`
        };
      }
    }
  };
</script>

<style scoped>
  .thumbnail {
    display: inline-block;
    color: #ccc;
  }
</style>
