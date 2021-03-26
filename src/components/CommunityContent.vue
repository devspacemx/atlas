<template>
  <div class="blog-content" v-html="content" />
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style lang="sass" scoped>
</style>