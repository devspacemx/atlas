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
        <g-link
          :to="item.node.path"
          v-for="item in $static.communities.edges"
          :key="item.node.id"
          class="col-md-4 mb-5 mb-md-0"
        >
          <img class="shadow-sm" :src="item.node.image" height="200" fit="contain" />
          <div class="mt-3 text-center text-md-start">
            <h4 class="display-6 fs-2 fs-lg-3 fw-bold">
              {{ item.node.title }}
            </h4>
            <p class="mb-0">
              {{ item.node.description }}
            </p>
            <a class="btn btn-link ps-0" href="#" role="button">
              Ecommerce Wordpress ›</a
            >
          </div>
        </g-link>
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
        image
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>

</style>
<script>

</script>
