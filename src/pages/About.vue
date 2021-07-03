<template>
  <Layout>
    <section id="about">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12 col-lg-5 mb-4 d-flex align-items-center">
            <g-image
              src="~/assets/images/latam.png"
              alt="Comunidades LATAM"
              class="img-fluid"
            />
          </div>
          <div class="col-md-12 col-lg-7 text-md-start align-self-center">
            <h1 class="fw-bold display-4">El Atlas<br />de comunidades</h1>
            <p class="text-dark">
              La razón de esta plataforma es el reconocimiento a todas las
              comunidades de tecnología y el crecimiento fenomenal que han
              tenido desde hace unos años.
            </p>
            <p class="text-dark">
              En toda Latinoamérica podemos encontrar distintas comunidades, ya
              sean de tecnologías en general O muy específicas, todas nacen
              gracias a las necesidades y oportunidades que hay en cada país.
            </p>
            <a class="btn btn-lg btn-info rounded-pill" href="#"
              >Comparte con tu red</a
            >
          </div>
        </div>
        <div class="row flex-center">
          <div class="col-12 col-md-4 order-0 order-md-1">
            <g-image
              src="~/assets/images/map.png"
              alt="Mapa"
              class="img-fluid"
            />
          </div>
          <div
            class="col-12 col-md-8 text-center text-md-start order-1 order-md-0"
            style="max-width: 460px;"
          >
            <p class="mt-3 text-dark">
              Las de software, las de hardware, las de emprendimiento, y más, y
              <b>más...</b>
              Todas igual de importantes, todas participando activamente en
              generar conocimiento Y experiencias para sus miembros.
            </p>
            <blockquote class="blockquote">
              <p>
                Para las personas, que puedan encontrar comunidades de su
                interés y hacer nuevas amistades.
              </p>
              <p>
                Para las comunidades, que puedan encontrar otros grupos con
                causas en común y hacer sinergia.
              </p>
              <p>
                Para las comunidades, que puedan encontrar otros grupos con
                causas en común y hacer sinergia.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Proyecto",
    };
  },
};
</script>

<style lang="scss"></style>
