<template>
  <ais-instant-search :search-client="searchClient" index-name="communities">
    <ais-autocomplete>
      <div slot-scope="{ currentRefinement, indices, refine }">
        <input
          :value="currentRefinement"
          class="form-control position-relative"
          type="search"
          placeholder="Buscar comunidad..."
          aria-label="Buscar comunidad"
          @input="refine($event.currentTarget.value)"
        />
        <div v-if="currentRefinement">
          <div
            v-for="index in indices"
            :key="index.indexId"
            class="position-absolute rounded-bottom top-100 p-3 text-dark results"
          >
            <div v-for="result in index.hits" :key="result.id">
              <div class="d-flex align-items-center">
                <g-link :to="result.path">
                  <g-image
                    :src="result.image"
                    :alt="`Logo ${result.title}`"
                    class="me-1 me-md-1"
                  />
                </g-link>
                <div class="my-3">
                  <g-link
                    :to="result.path"
                    class="mb-0 text-black fw-bold fs-1 text-truncate d-inline-block"
                    >{{ result.title }}</g-link
                  >
                  <p class="fw-normal mb-0">
                    <font-awesome :icon="['fas', 'map-marker-alt']" />
                    {{ result.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch";

export default {
  data() {
    return {
      indexName: "communities",
      searchClient: algoliasearch(
        "U1ZL2LF7CY",
        "622b01f525130a78320a7b2e0cba056d"
      ),
      query: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.results {
  width: 100%;
  background-color: #fff;
}
</style>
