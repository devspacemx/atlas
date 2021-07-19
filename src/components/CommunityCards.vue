<template>
  <div class="row">
    <div
      v-for="community in communities"
      class="col-lg-4 col-md-6 col-xs-12 mb-4 d-flex"
      :key="community.id"
    >
      <CommunityCard :community="community.node" />
    </div>
  </div>
</template>

<script>
import CommunityCard from "./CommunityCard.vue";
export default {
  components: {
    CommunityCard,
  },
  props: {
    communities: Array,
  },
};
</script>
<style lang="scss" scoped></style>
