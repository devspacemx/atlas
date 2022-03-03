<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3"
      data-navbar-on-scroll="data-navbar-on-scroll"
      style="background-image: none; background-color: rgb(255, 255, 255); transition: none 0s ease 0s;"
    >
      <div class="container">
        <g-link class="navbar-brand" to="/">
          <g-image
            src="~/assets/images/logo.png"
            alt="Logotipo Atlas"
            width="100"
          />
        </g-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-truncate"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav me-auto ms-lg-4 ms-xl-7 border-bottom border-lg-bottom-0 pt-2 px-2 pt-lg-0"
          >
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/" exact>Inicio</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/comunidades/" exact
                >Comunidades</g-link
              >
            </li>
            <!--             <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/" exact>Mapa</g-link>
            </li> -->
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/acerca/" exact
                >Sobre Atlas</g-link
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/devspacemx/atlas"
                >GitHub</a
              >
            </li>
          </ul>
          <div class="d-flex py-4 py-lg-0">
            <g-link
              class="btn btn-info me-1 text-truncate"
              to="/nueva-comunidad"
              role="button"
              >Añade una comunidad</g-link
            >
          </div>
          <div class="d-flex align-items-center ps-lg-3">
            <Search style="max-width:20rem" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding-top: 1rem;
}
</style>
