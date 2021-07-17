<template>
  <g-link
    :to="community.node.path"
    class="text-decoration-none text-reset card h-100 shadow px-2 px-lg-3 card-span"
  >
    <div class="card-body">
      <div class="d-flex align-communitys-center">
        <g-image
          :src="community.node.image"
          :alt="`Logo ${community.node.title}`"
          class="me-3 me-md-3"
        />
        <div class="my-3">
          <p class="mb-0 text-black fw-bold fs-1 d-inline-block">
            {{ community.node.title }}
          </p>
          <p class="fw-normal mb-0">
            <font-awesome :icon="['fas', 'map-marker-alt']" />
            <g-link :to="community.node.location.path">
              {{ community.node.location.title }}
            </g-link>
          </p>
        </div>
      </div>
      <div class="fw-bold text-uppercase">Descripción</div>
      <p class="text-wrap text-body text-truncate text-black mb-1">
        {{
          community.node.description.length >= 150
            ? community.node.description.slice(0, 150) + "..."
            : community.node.description
        }}
      </p>
      <div class="fw-bold text-uppercase">Tags</div>
      <div class="d-flex align-communitys-center mt-1 fs-1">
        <div class="tagcloud">
          <!-- only show 3 tags -->
          <g-link
            :to="community.path"
            v-for="community in community.node.tags.slice(0, 3)"
            :key="community.id"
          >
            {{ community.title }}
          </g-link>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    community: Object,
  },
};
</script>
<style lang="scss" scoped></style>