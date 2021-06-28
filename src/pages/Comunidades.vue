<template>
  <Layout>
    <div class="container">
      <h1 class="mt-7">Comunidades</h1>
      <CommunityCards :communities="$page.communities.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Communities($page: Int) {
communities: allCommunity (sortBy: "title", order: ASC, perPage: 18, page: $page) @paginate {
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
        location
        tags {
          title
          path
        }
        image (width: 100, quality: 70)
      }
    }
}
}
</page-query>

<script>
import { Pager } from "gridsome";
import CommunityCards from "../components/CommunityCards";

export default {
  components: {
    Pager,
    CommunityCards,
  },
  metaInfo: {
    title: "Comunidades",
  },
};
</script>
<style lang="scss" scoped>
.pager {
  display: inline-block;
  width: 100%;
  text-align: center;

  &__link {
    color: var(--link-color);
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    }
  }
}

.active {
  background-color: var(--bg-content-color);
  border-radius: 5px;
}
</style>
