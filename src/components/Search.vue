<template>
  <ais-instant-search
    :search-client="searchClient"
    :attributesToRetrieve="['title']"
    index-name="communities"
  >
    <ais-configure :hits-per-page.camel="5" :distinct="true" />
    <ais-autocomplete>
      <div slot-scope="{ currentRefinement, indices, refine }">
        <input
          :value="currentRefinement"
          class="form-control position-relative"
          type="search"
          placeholder="Buscar comunidad..."
          aria-label="Buscar comunidad"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="none"
          spellcheck="false"
          @input="refine($event.currentTarget.value)"
        />
        <ais-powered-by
          class="position-absolute top-50 end-0 translate-middle-y"
          style="margin-right:25px"
        />
        <div v-if="currentRefinement">
          <div
            v-for="index in indices"
            :key="index.indexId"
            class="position-absolute top-100 text-dark results shadow px-2 px-lg-3"
          >
            <div v-for="result in index.hits" :key="result.id">
              <g-link :to="result.path" class="d-flex align-items-center">
                <div class="my-3">
                  <p
                    class="mb-0 text-black fw-bold fs-1 text-truncate d-inline-block"
                  >
                    {{ result.title }}
                  </p>
                  <p class="fw-normal mb-0">
                    <font-awesome :icon="['fas', 'map-marker-alt']" />
                    {{ result.location }}
                  </p>
                </div>
              </g-link>
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
    };
  },
};
</script>
<style lang="scss" scoped>
.results {
  width: 20rem;
  background-color: #fefefe;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
/* clears the 'X' from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
