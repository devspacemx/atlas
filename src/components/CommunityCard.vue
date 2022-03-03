<template>
  <div class="link-block flex-fill">
    <g-link
      class="overlay text-decoration-none text-reset card h-100 shadow px-2 px-lg-3 card-span"
      :to="community.path"
    ></g-link>
    <div class="inner">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <g-image
            :src="community.image"
            :alt="`Logo ${community.title}`"
            class="me-3 me-md-3"
          />
          <div class="my-3">
            <p class="mb-0 text-black fw-bold fs-1 d-inline-block">
              {{ community.title }}
            </p>
            <p class="fw-normal mb-0">
              <font-awesome :icon="['fas', 'map-marker-alt']" />
              <g-link :to="community.location.path">
                {{ community.location.title }}
              </g-link>
            </p>
          </div>
        </div>
        <p class="text-wrap text-body text-truncate text-black mb-1">
          {{
            community.description.length >= 150
              ? community.description.slice(0, 150) + "..."
              : community.description
          }}
        </p>
        <div class="d-flex align-items-center mt-1 fs-1">
          <div class="tagcloud">
            <!-- only show 3 tags -->
            <g-link
              :to="tag.path"
              v-for="tag in community.tags.slice(0, 3)"
              :key="tag.id"
            >
              {{ tag.title }}
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    community: Object,
  },
};
</script>
<style lang="scss" scoped>
.link-block {
  position: relative;
}

.link-block .overlay {
  position: absolute;
  height: 100%;
  width: 100%;
}

.link-block .inner {
  position: relative;
  pointer-events: none;
  z-index: 1;
}

.link-block .inner a {
  pointer-events: all;
}
</style>
