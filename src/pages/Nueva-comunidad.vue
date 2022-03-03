<template>
  <Layout>
    <section id="nueva-comunidad">
      <div class="container">
        <!-- Agregar comunidad -->
        <div class="row flex-center">
          <div
            class="col-md-12 col-lg-4 mb-4 mt-4 d-flex align-items-center justify-content-center order-lg-0 order-md-0"
          >
            <g-image
              src="~/assets/images/collab.png"
              alt="Construyamos juntos"
              class="img-fluid"
            />
          </div>
          <div
            class="col-md-12 col-lg-8 text-md-start order-lg-1 order-md-1"
            style="max-width: 460px;"
          >
            <h1 id="nueva-comunidad" class="fw-bold display-4 mb-4 mt-4">
              ¿Cómo agrego una comunidad?
            </h1>
            <p class="text-dark">
              Agregar una comunidad al Atlas es muy sencillo, por ahora existen
              2 formas 👇
            </p>
            <ul class="text-dark">
              <li>
                💻 Clona el
                <a href="https://github.com/devspacemx/atlas" target="_blank"
                  >repositorio de GitHub</a
                >
                del Atlas de comunidades y agrega un registro en forma de
                archivo markdown al registro de comunidades, sigue las
                instrucciones en el archivo <b>README.md</b> en la raíz del
                repositorio.<br />Una vez que termines de hacer los cambios,
                crea un Pull Request y un mantainer del repositorio aprobará los
                cambios.
              </li>
              <li>
                📄 Llena este
                <a href="https://forms.gle/o4CeeMgSaJbXE7896" target="_blank"
                  >formulario de Google Docs</a
                >
                con los datos que se te solicitan, una vez hayamos agregado tu
                comunidad al registro te notificaremos por correo electrónico.
              </li>
            </ul>
          </div>
        </div>
    
      </div>
    </section>
  </Layout>
</template>

<script>
import { metaInfo } from "../data";

export default {
  metaInfo() {
    return metaInfo(this.$seo, "¿Qué es?", true);
  },
  data() {
    return {
      shareText:
        "🔎 ¿Ya conoces Atlas?%0aDescubre esta plataforma dónde se reúnen las comunidades tecnológicas en Latinoamérica 🌎 %0aConoce más sobre el proyecto en 👉 https://comunidades.lat/",
    };
  },
};
</script>

<style lang="scss"></style>
