<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-10 order-1">
          <h1 class="fw-bold">Comunidades</h1>
          <Pager :data="$page.communities.pageInfo"></Pager>
          <CommunityCards :communities="$page.communities.edges" />
        </div>
        <div class="col-lg-2 sidebar order-0">
          <div class="sidebar-box mt-2">
            <h3>Tags</h3>
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
        image (width: 100, quality: 90)
      }
    }
}
  tags: allTag {
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
