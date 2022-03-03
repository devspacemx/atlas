<template>
  <Layout>
    <g-image class="img-fluid" src="~/assets/images/404.png" />
        <p class="text-black fw-bold text-center">¡Ups! Página no encontrada</p>
  </Layout>
</template>

<style scoped lang="scss">
img {
  width: 30%;
  margin: auto;
  margin-top: 8rem;

  @media (max-width: 500px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
}
</style>
