<template>
  <div class="row">
    <div
      v-for="item in communities"
      class="col-lg-4 col-md-6 col-xs-12 mb-4"
      :key="item.id"
    >
      <div class="card h-100 shadow px-2 px-lg-3 card-span">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <g-link :to="item.node.path">
              <g-image
                :src="item.node.image"
                :alt="`Logo ${item.node.title}`"
                class="me-3 me-md-3"
              />
            </g-link>
            <div class="my-3">
              <g-link
                :to="item.node.path"
                class="mb-0 text-black fw-bold fs-1 text-truncate d-inline-block"
                >{{ item.node.title }}</g-link
              >
              <p class="fw-normal mb-0">
                <font-awesome :icon="['fas', 'map-marker-alt']" />
                {{ item.node.location }}
              </p>
            </div>
          </div>
          <div class="fw-bold text-uppercase">Descripción</div>
          <p class="text-wrap text-body text-truncate text-black mb-1">
            {{
              item.node.description.length >= 150
                ? item.node.description.slice(0, 150) + "..."
                : item.node.description
            }}
          </p>
          <div class="fw-bold text-uppercase">Tags</div>
          <div class="d-flex align-items-center mt-1 fs-1">
            <div class="tagcloud">
              <!-- only show 3 tags -->
              <g-link
                :to="item.path"
                v-for="item in item.node.tags.slice(0, 3)"
                :key="item.id"
              >
                {{ item.title }}
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    communities: Array,
  },
};
</script>
<style lang="scss" scoped></style>
