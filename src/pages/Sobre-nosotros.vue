<template>
  <Layout>
    <section id="about">
      <div class="container">
        <div class="row flex-center">
          <div class="col-md-12 col-lg-4 mb-4 d-flex align-items-center">
            <g-image
              src="~/assets/images/latam.png"
              alt="Comunidades LATAM"
              class="img-fluid"
            />
          </div>
          <div
            class="col-md-12 col-lg-8 text-md-start align-self-center"
            style="max-width: 600px"
          >
            <h1 class="fw-bold display-4 mb-2 mt-1">
              El Atlas<br />de comunidades
            </h1>
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
            <p class="mt-3 text-dark">
              Las de software, las de hardware, las de emprendimiento, y más, y
              <b>más...</b>
              Todas igual de importantes, todas participando activamente en
              generar conocimiento Y experiencias para sus miembros.
            </p>
          </div>
          <div class="col-12 col-md-4 order-0 order-md-1">
            <g-image
              src="~/assets/images/people.png"
              alt="Personas"
              class="img-fluid"
            />
          </div>
          <div
            class="col-12 col-md-8 text-center text-md-start order-1 order-md-0"
            style="max-width: 460px;"
          >
            <h2 class="fw-bold display-5 mb-3 mt-3">¿Para quienes?</h2>
            <p class="text-dark">
              Para las personas, que puedan encontrar comunidades de su interés
              y hacer nuevas amistades.
            </p>
            <p class="text-dark">
              Para las comunidades, que puedan encontrar otros grupos con causas
              en común y hacer sinergia.
            </p>
            <p class="text-dark">
              Para las comunidades, que puedan encontrar otros grupos con causas
              en común y hacer sinergia.
            </p>
            <a class="btn btn-lg btn-info rounded-pill" href="#"
              >Comparte con tu red</a
            >
          </div>

   <div class="col-md-12 col-lg-4 mb-4 d-flex align-items-center">
          <g-image
            src="~/assets/images/collab.png"
            alt="Construyendo juntos"
            class="img-fluid"
          />
          </div>
          <div
            class="col-md-12 col-lg-8 text-md-start align-self-center"
            style="max-width: 600px"
            id="agregar-comunidad"
          >
          <h2 class="fw-bold display-5 mb-3 mt-5 text-center">
            ¿Cómo agrego una comunidad?
            </h2>
             <p class="text-dark text-center">
            Agregar una comunidad al Atlas es muy sencillo, por ahora existen 2
            formas:
          </p>
          <ul class="text-dark">
            <li>
              Clonar el
              <a href="https://github.com/devspacemx/atlas" target="_blank"
                >repositorio de GitHub</a
              >
              del Atlas de comunidades y agregar un registro en forma de archivo
              markdown al registro de comunidades.
            </li>
            <li>Llenar un formulario de Google Docs</li>
          </ul>
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
