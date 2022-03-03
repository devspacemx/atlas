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
            <p class="mt-3 text-dark">
              Atlas es una plataforma que busca unificar un directorio de
              comunidades tecnológicas.<br />
              Reconozcamos la labor que han hecho muchas comunidades en
              Latinoamérica.<br />
              El Atlas lo construimos todos. Hagamos comunidad 👋
            </p>
            <p class="text-dark">Hay un total de <strong>{{$page.total.edges.length}}</strong> comunidades registradas</p>
            <span>
              <g-link
                class="btn btn-info me-1"
                to="/acerca"
                role="button"
                >Añade una comunidad</g-link
              >
            </span>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-auto my-4">
          <h5 class="display-5 fw-bold">
            Últimas comunidades registradas
          </h5>
        </div>
      </div>
      <CommunityCards :communities="$page.communities.edges" />
      <a
        class="btn"
        :href="'https://twitter.com/intent/tweet?text=' + shareText"
        target="_blank"
        rel="noreferrer"
        role="button"
        >Comparte el Atlas con tus amigos</a
      >
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
        location {
          title
          path
        }
        tags {
          title
          path
        }
        image (width: 100, quality: 90)
      }
    }
  },
  total: allCommunity {
    edges {
      node {
        id
      }
    }
  }
}
</page-query>

<script>
import CommunityCards from "../components/CommunityCards";
import { metaInfo } from "../data";
export default {
  components: {
    CommunityCards,
  },
  metaInfo() {
    return metaInfo(this.$seo, 'Atlas', false);
  },
  data() {
    return {
      shareText:
        "🔎 ¿Ya conoces Atlas?%0aDescubre esta plataforma dónde se reúnen las comunidades tecnológicas en Latinoamérica 🌎 %0aConoce más sobre el proyecto en 👉 https://comunidades.lat/",
    };
  },
};
</script>

<style lang="scss" scoped></style>
