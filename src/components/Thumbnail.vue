<template>
  <div
    class='thumbnail'
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      background: primary,
      borderTop: `${height/2}px solid ${secondary}`,
      borderRight: `${width/2}px solid transparent`,
      borderBottom: `${height/2}px solid transparent`,
      borderLeft: `${width/2}px solid ${secondary}`
    }"
  ></div>
</template>

<script>
  export default {
    name: 'Thumbnail',
    props: ['width', 'height', 'primary', 'secondary']
  };
</script>

<style>
  .thumbnail {
    display: inline-block;
  }
</style>
