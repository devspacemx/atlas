<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-9 order-1">
          <h1 class="fw-bold mb-4">Comunidades con el tag: {{ $page.tag.title }}</h1>
          <Pager :data="$page.tag.belongsTo.pageInfo"></Pager>
          <CommunityCards :communities="$page.tag.belongsTo.edges" />
        </div>
        <div class="col-lg-3 sidebar order-0">
          <p>Descubre comunidades</p>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                🏷️ Tags
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div class="tagcloud">
              <g-link
                v-for="item in $page.tags.edges"
                :to="item.node.path"
                :key="item.node.id"
                v-bind:class="isCurrentTag(item.node.title) ? 'text-info' : ''"
              >
                {{ item.node.title }}
              </g-link>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                🌎 Países
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <div class="tagcloud">
                  <g-link
                    v-for="item in $page.locations.edges"
                    :to="item.node.path"
                    :key="item.node.id"
                  >
                    {{ item.node.title }}
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 21) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Community {
        id
        path
        title
        description
        location {
          title
          path
        }
        tags {
          title
          path
        }
        image (width: 100, quality: 70)
          }
        }
      }
    }
  }
  tags: allTag (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
  locations: allLocation (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import CommunityCards from "../components/CommunityCards";
import Pager from "../components/Pager";
import { metaInfo } from "../data";

export default {
  components: {
    Pager,
    CommunityCards,
  },
  methods: {
    isCurrentTag(tag) {
      return tag === this.$page.tag.title;
    },
  },
  metaInfo() {
    return metaInfo(this.$seo, this.$page.tag.title, true);
  },
};
</script>
<style lang="scss" scoped></style>
