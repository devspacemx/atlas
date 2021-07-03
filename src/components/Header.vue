<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 shadow-transition"
      data-navbar-on-scroll="data-navbar-on-scroll"
      style="background-image: none; background-color: rgb(255, 255, 255); transition: none 0s ease 0s;"
    >
      <div class="container-fluid">
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto ms-lg-4 ms-xl-7 border-bottom border-lg-bottom-0 pt-2 pt-lg-0"
          >
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/" exact>Inicio</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/comunidades" exact>Comunidades</g-link>
            </li>
<!--             <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/" exact>Mapa</g-link>
            </li> -->
            <li class="nav-item">
              <g-link class="nav-link fw-medium" to="/about" exact>Sobre Atlas</g-link>
            </li>
          </ul>
          <form class="d-flex py-3 py-lg-0">
            <a
              class="btn btn-info order-0 me-1"
              href="https://github.com/devspacemx/atlas"
              role="button"
              target="_blank"
              >Añade una comunidad</a
            >
            <div class="d-flex align-items-center ps-lg-3 order-3">
      <SearchBar />
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

import SearchBar from './Search.vue';

export default {
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding-top: 1rem;
}
</style>
