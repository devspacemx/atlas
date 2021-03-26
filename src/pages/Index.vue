<template>
<Layout>
    <section id="hero" class="py-0 bg-light-gradient">
      <div
        class="bg-holder"
        style="
          background-image: url(../assets/images/hero.png);
          background-position: top right;
          background-size: contain;
        "
      ></div>
      <!--/.bg-holder-->

      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 offset-md-1 order-md-1 pt-8">
            <img class="img-fluid" src="../assets/images/hero.png" alt="" />
          </div>
          <div class="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
            <h1 class="display-2 fw-bold fs-4 fs-md-5 fs-xl-6">
              El Atlas de comunidades tech</br> en latinoamerica 🌎
            </h1>
            <p class="mt-3 mb-4">
              Atlas es una plataforma que busca unificar un directorio de comunidades tecnológicas.<br>
              Nuestro objetivo es darle una mayor visibilidad a aquellas comunidades que van empezando y
              tienen mucho que aportar al ecosistema.
            </p>
            <a
              class="btn btn-lg btn-info rounded-pill me-2"
              href="#"
              role="button"
              >Agrega un registro</a
            ><span> o </span
            ><a
              class="btn btn-link ps-1 ps-md-4 ps-lg-1"
              href="#"
              role="button"
            >
              Comparte el atlas con tus amigos</a
            >
          </div>
        </div>
      </div>
    </section>
      <div class="container">
        <div class="row g-5">

      <g-link
        :to="item.node.path"
        v-for="item in $page.communities.edges"
        :key="item.node.id"
        class="col-lg-4"
      >

            <div class="post-entry d-block small-post-entry-v">
              <div class="thumbnail">
                <a href="single.html">
                  <img :src="item.node.image" alt="Image" class="img-fluid" />
                </a>
              </div>
              <div class="content">
                <div class="post-meta mb-1">
                  <a href="#" class="category">Business</a>,
                  <a href="#" class="category">Travel</a> —
                  <span class="date">July 2, 2020</span>
                </div>
                <h2 class="heading mb-3">
                  <a href="single.html"
                    >{{item.node.title}}</a
                  >
                </h2>
                <p>
                  {{item.node.excerpt}}
                </p>
                <a href="#" class="post-author d-flex align-items-center">
                  <div class="author-pic">
                    <img src="images/person_1.jpg" alt="Image" />
                  </div>
                  <div class="text">
                    <strong>@devspacemx</strong>
                    <span>Tech</span>
                  </div>
                </a>
              </div>
            </div>
      </g-link>
        </div>
      </div>
    </Layout>
</template>


<page-query>
query Community {
	communities: allCommunity(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</page-query>

<script>
import Communities from "../components/Communities";
export default {
  components: {
    Communities,
  },
};
</script>

<style lang="scss" scoped>
</style>
