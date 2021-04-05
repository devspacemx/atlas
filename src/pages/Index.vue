<template>
  <Layout>
    <section id="hero" class="py-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 offset-md-1 order-md-1 pt-8">
            <img class="img-fluid" src="../assets/images/hero.png" alt="" />
          </div>
          <div class="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
            <h1 class="display-2 fw-bold fs-4 fs-md-5 fs-xl-6">
              El Atlas de comunidades tech <br />
              en latinoamerica 🌎
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
              href="#"
              role="button"
            >
              Comparte el atlas con tus amigos</a
            >
          </div>
        </div>
      </div>
    </section>
    <Communities />
  </Layout>
</template>
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
