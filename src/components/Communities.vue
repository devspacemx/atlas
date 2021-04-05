<template>
  <section class="py-3" id="comunitties">
    <div class="container">
      <div class="row flex-center">
        <div class="col-auto text-center my-4">
          <h3 class="display-3 fw-bold">
            Últimas comunidades<br />registradas
          </h3>
        </div>
      </div>
      <div class="row">
        <g-link
          :to="item.node.path"
          v-for="item in $static.communities.edges"
          :key="item.node.id"
          class="col-md-4 mb-5 mb-md-0"
        >
          <div class="row d-flex align-items-center">
            <div class="col-md-4 flex-shrink-0">
              <g-image class="img-fluid shadow-sm" :src="item.node.image" />
            </div>
            <div class="col-md-7 flex-grow-1 ms-3">
              <h5 class="fs-2 fs-lg-3 fw-bold">
                {{ item.node.title }}
              </h5>
              <div class="icon"><span>i</span> Culiacán</div>
              <div class="icon"><span>i</span> Culiacán</div>
              <div class="icon"><span>i</span> Culiacán</div>
            </div>
          </div>
          <div class="mt-3 text-center text-md-start">
            <h5>DESCRIPCIÓN</h5>
            <p class="mb-0">
              {{ item.node.description }}
            </p>
            <a class="btn btn-link ps-0" href="#" role="button">a</a>
          </div>
        </g-link>
      </div>
    </div>
  </section>
</template>
<static-query>
query Community {
  communities: allCommunity(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        description
        tags
        image
      }
    }
  }
}
</static-query>
<script>
export default {};
</script>
