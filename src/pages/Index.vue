<template>
  <Layout>
    <section id="hero" class="py-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 offset-md-1 order-md-1 pt-8">
            <g-image
              class="img-fluid"
              src="~/assets/images/collab2.png"
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
              Reconozcamos la labor que han hecho muchas comunidades en
              Latinoamérica.<br/> El Atlas lo construimos todos. Hagamos comunidad 👋
            </p>
            <g-link
              class="btn btn-lg btn-info rounded-pill me-2"
              to="/comunidades"
              role="button"
              >Conoce las comunidades</g-link
            ><span> o </span
            ><a
              class="btn btn-link ps-1 ps-md-4 ps-lg-1"
              :href='"https://twitter.com/intent/tweet?text=" + shareText'
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
  metaInfo: {
    title: "Atlas",
    titleTemplate: "%s",
  },
  data() {
    return {
      shareText:
        '🔎 ¿Ya conoces el Atlas tech?%0aEs una plataforma para dar a conocer a todas las comunidades tecnológicas de LATAM 🌎%0a¡Conoce más sobre el proyecto en 👉 https://comunidades.lat',
    };
  },
};
</script>

<style lang="scss" scoped></style>
