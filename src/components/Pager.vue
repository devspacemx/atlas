<template>
    <Pager :info="data"
       class="pager-container"
       linkClass="pager-container__link"  />
</template>

<script>
  import {Pager} from 'gridsome';

export default {
  components: {
    Pager
  },
  props: {
    data: Object,
  },
}
</script>

<style lang="scss" scoped>
 .pager-container {
    display: inline-block;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    color: black;

    &__link {
      text-align: center;
      padding: 0.6rem 1.2rem;
      color: #000;
      text-decoration: none;
    }
  }

  .active {
    color: blueviolet;
  }
</style>
