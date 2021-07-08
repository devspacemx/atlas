<template>
  <Layout>
    <div class="container">
      <h1 class="mt-7">Comunidades</h1>
      <Pager :data="$page.communities.pageInfo"></Pager>
      <CommunityCards :communities="$page.communities.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Communities($page: Int) {
communities: allCommunity (sortBy: "date", order: DESC, perPage: 18, page: $page) @paginate {
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
import CommunityCards from "../components/CommunityCards";
import Pager from "../components/Pager";

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
