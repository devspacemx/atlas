<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top py-3"
    data-navbar-on-scroll="data-navbar-on-scroll"
  >
    <div class="container-fluid">
      <g-link class="navbar-brand" to="/">
        <img src="../assets/images/logo.png" alt="Logotipo Atlas" width="100" />
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
            <g-link class="nav-link fw-medium active" to="/">Inicio</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link fw-medium" to="/mapa">Mapa</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link fw-medium" to="/acerca-de"
              >Sobre el Atlas</g-link
            >
          </li>
        </ul>
        <form class="d-flex py-3 py-lg-0">
          <a
            class="btn btn-link text-1000 fw-medium order-1 order-lg-0 me-lg-2"
            href="#"
            role="button"
            >Redes</a
          ><a class="btn btn-info order-0 me-1" href="#" role="button"
            >Añade una comunidad</a
          >
          <div class="d-flex align-items-center ps-lg-3 order-3">
            <svg
              class="bi bi-search"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#272D4E"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}
</style>
