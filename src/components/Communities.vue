<template>
  <section class="py-3" id="communities">
    <div class="container">
      <div class="row flex-center">
        <div class="col-auto text-center my-4">
          <h5 class="display-5 fw-bold">
            Últimas comunidades<br />registradas
          </h5>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in $static.communities.edges"
          :key="item.node.id"
          class="col-md-6 mb-4"
        >
          <div class="card h-100 shadow px-2 px-lg-3 card-span pt-4">
            <div class="card-body">
              <h5 class="fw-bold lh-base fs-1 text-700"></h5>
              <div class="d-flex align-items-center">
                <g-image :src="item.node.image" class="me-3 me-md-3" />
                <div class="my-3">
                  <p class="mb-0 text-black fw-bold">{{ item.node.title }}</p>
                  <p class="fw-normal mb-0">
                    May, 2020 .<span>7 mins read</span>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mt-4 fs--1">
                <div class="tagcloud">
                  <!-- only show 3 tags -->
                  <g-link to="/" v-for="item in item.node.tags.slice(0, 3)" :key="item">
                    {{ item }}
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<static-query>
query Community {
  communities: allCommunity(sortBy: "date", limit: 6) {
    edges {
      node {
        id
        path
        title
        description
        tags
        image (width: 100, quality: 70)
      }
    }
  }
}
</static-query>

<style lang="scss" scoped></style>
<script></script>
