<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-9 order-1">
          <h1 class="fw-bold mb-4">Comunidades</h1>
          <CommunityCards :communities="$page.communities.edges" />
          <Pager class="text-start" :data="$page.communities.pageInfo"></Pager>
        </div>
        <div class="col-lg-3 sidebar order-0">
          <p>Descubre comunidades</p>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                🏷️ Tags
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div class="tagcloud">
                  <g-link
                    v-for="item in $page.tags.edges"
                    :to="item.node.path"
                    :key="item.node.id"
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
query Communities($page: Int) {
communities: allCommunity (sortBy: "date", order: DESC, perPage: 21, page: $page) @paginate {
    totalCount
    pageInfo { 
      totalPages
      currentPage
      isFirst
      isLast
      } 
    edges {
      node {
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
        image (width: 100, quality: 90)
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

;

<script>
import CommunityCards from "../components/CommunityCards";
import Pager from "../components/Pager";
import { metaInfo } from "../data";

export default {
  components: {
    Pager,
    CommunityCards,
  },
  metaInfo() {
    return metaInfo(this.$seo, "Comunidades", true);
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #f6f6f6;
  border-radius: 6px;
}
.sidebar-box {
  background-color: #f6f6f6;
}
</style>
