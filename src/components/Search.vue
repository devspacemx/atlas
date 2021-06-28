<template>
  <div>
    <search-focus @keyup="focusSearch"></search-focus>
    <div class="search-bar">
      <input
        type="text"
        class="form-control"
        id="fuse-search"
        placeholder="Búsqueda..."
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="searchResultsVisible = true"
        @keydown="performSearch"
        ref="search"
      />
      <div class="close" v-if="query.length > 0" @click="reset">
        &times;
      </div>
    </div>

    <div
      v-if="query.length > 1 && searchResultsVisible"
      class="search-bar-results"
    >
      <div
        class="results-wrap clearfix"
        v-for="(post, index) in searchResults"
        :key="index"
      >
        <a
          :href="post.item.path"
          @mousedown.prevent="searchResultsVisible = true"
          :class="{ 'results-active': index === highlightedIndex }"
        >
          <div class="results-head">
            {{ post.item.title }}
          </div>
          <p class="float-start font-size-100 gray-500 mb-0 me-1">
            <span class="small"
              ><strong>{{ post.item.category }}</strong></span
            >
          </p>
          <p class="results-description">
            {{ post.item.description }}
          </p>
        </a>
      </div>
      <div
        v-if="query.length > 1 && searchResults.length === 0"
        class="px-3 py-2"
      >
        <div class="results-description mb-0">
          No results for <strong>"{{ query }}"</strong>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchFocus from "./SearchFocus.vue";
import axios from "axios";

export default {
  name: "SearchBar",
  components: {
    SearchFocus,
  },
  data() {
    return {
      query: "",
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      dataAvailable: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["title", "description", "category"],
      },
    };
  },
  methods: {
    reset() {
      this.query = "";
    },
    async performSearch() {
      if (!this.dataAvailable) {
        const response = await axios.get("/comunidades.json");
        this.posts = response.data;
      }
      const results = await this.$search(this.query, this.posts, this.options);
      this.searchResults = results;
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar .form-control,
.search-bar .form-control:focus,
.search-bar-results {
  width: 144px;
  height: 32px;
  color: #000;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.08);
  font-weight: 500;
  opacity: 1;
}
.search-bar-results {
  z-index: 100;
  height: auto;
  min-width: 320px;
  position: fixed;
  top: 68px;
  right: 16px;
  max-height: 320px;
  overflow-y: auto;
}
.search-bar-results a {
  color: #000;
}
// Styling the dark/light mode button
.search-bar .btn {
  height: 32px;
  line-height: 1;
  padding: 0 0.5rem;
  color: #000;
  font-weight: 500;
  opacity: 1;
  z-index: 99;
  border: 1px solid #808080;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  float: left;
  margin-right: 0.25rem;
}
.search-bar .close {
  position: relative;
  top: -31.5px;
  right: 16px;
  font-size: 1.25rem;
  color: #808080;
  cursor: pointer;
  float: right;
}
@media (max-width: 1024px) {
  .search-bar {
    position: static;
    top: 0;
    right: 0;
    margin: 0.5rem 1rem 2rem;
  }

  .search-bar .btn {
    width: 48px;
    float: right;
    margin-right: 0;
  }

  .search-bar .form-control,
  .search-bar .form-control:focus,
  .search-bar-results {
    width: calc(100% - 56px);
  }

  .search-bar-results {
    min-width: none;
    position: absolute;
    top: 184px;
    right: auto;
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }

  .search-bar .close {
    position: fixed;
    top: 140px;
    right: 88px;
    font-size: 1.25rem !important;
    color: #808080;
    cursor: pointer;
    float: right;
  }
}
.results-wrap {
  padding: 1rem;
  background-color: #fff;
}
.search-bar-results a > .results-wrap:hover {
  text-decoration: none;
}
.results-wrap:last-of-type {
  border-bottom: none;
}
.results-wrap:hover,
.results-active {
  background-color: #d4f4ff;
}
.results-wrap a:hover {
  text-decoration: none;
}
.results-head {
  font-weight: 700;
  margin-bottom: 0.125rem;
  line-height: 1.25;
}
.results-description {
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
