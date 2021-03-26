<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body,
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>