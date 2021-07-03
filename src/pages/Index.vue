<template>
  <Layout>
    <section id="hero" class="py-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 offset-md-1 order-md-1 pt-8">
            <img
              class="img-fluid"
              src="../assets/images/hero.png"
              alt="Atlas de comunidades"
            />
          </div>
          <div class="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
            <h1 class="display-2 fw-bold fs-xl-4">
              El Atlas de comunidades tech <br />
              en Latinoamérica 🌎
            </h1>
            <p class="mt-3 mb-4">
              Atlas es una plataforma que busca unificar un directorio de
              comunidades tecnológicas.<br />
              Nuestro objetivo es darle una mayor visibilidad a aquellas
              comunidades que van empezando y tienen mucho que aportar al
              ecosistema.
            </p>
            <a
              class="btn btn-lg btn-info rounded-pill me-2"
              href="#"
              role="button"
              >Agrega un registro</a
            ><span> o </span
            ><a
              class="btn btn-link ps-1 ps-md-4 ps-lg-1"
              :href="linkShare"
              target="_blank"
              role="button"
            >
              Comparte el atlas con tus amigos</a
            >
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row flex-center">
        <div class="col-auto text-center my-4">
          <h5 class="display-5 fw-bold">
            Últimas comunidades<br />registradas
          </h5>
        </div>
      </div>
      <CommunityCards :communities="$page.communities.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Community {
  communities: allCommunity(sortBy: "date", limit: 6) {
    edges {
      node {
        id
        path
        title
        description
        location
        tags {
          title
          path
        }
        image (width: 100, quality: 70)
      }
    }
  }
}
</page-query>

<script>
import CommunityCards from "../components/CommunityCards";
export default {
  components: {
    CommunityCards,
  },
  data() {
    return {
    linkShare: 'http://twitter.com/share?text=jeje&url=http://atlas.devspace.mx&hashtags=atlascomunidades,atlastech'

    }
  },
};
</script>

<style lang="scss" scoped></style>
