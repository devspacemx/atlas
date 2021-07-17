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
              Latinoamérica.<br />
              El Atlas lo construimos todos. Hagamos comunidad 👋
            </p>
            <span>
              <g-link
                class="btn btn-info me-1"
                to="/acerca#nueva-comunidad"
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
        class="btn btn-link ps-1 ps-md-4 ps-lg-1"
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
  }
}
</page-query>

<script>
import CommunityCards from "../components/CommunityCards";
export default {
  components: {
    CommunityCards,
  },
  metaInfo() {
    const siteURL = "https://comunidades.lat";
    const logoURL = encodeURI(`${siteURL}/logo.png`);
    const imageURL = encodeURI(`${siteURL}/screen.png`);
    const socialImage =
      `https://motif.imgix.com/i?url=${siteURL}` +
      `&image_url=${imageURL}` +
      `&color=94a2b3&` +
      `logo_url=${logoURL}` +
      `&logo_alignment=top%2Cleft` +
      `&text_alignment=bottom%2Cleft&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d`;
    return this.$seo({
      title: "Atlas de comunidades",
      baseUrl: `${siteURL}`,
      keywords: `atlas,atlas comunidades,atlas tech,comunidades tech,comunidad tech,comunidad`,
      lang: "es",
      language: "Spanish",
      image: socialImage,
      openGraph: {
        type: "website",
        image: socialImage,
      },
      twitter: {
        type: "summary_large_image",
        image: socialImage,
      },
    });
  },
  data() {
    return {
      shareText:
        "🔎 ¿Ya conoces el Atlas tech?%0aDescubre las comunidades tecnológicas en Latinoamérica 🌎%0a¡Conoce más sobre el proyecto en 👉 https://comunidades.lat!",
    };
  },
};
</script>

<style lang="scss" scoped></style>
