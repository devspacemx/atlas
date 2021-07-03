<template>
  <Layout>
    <div class="container">
      <h1 class="mt-7">Comunidades con el tag: {{ $page.tag.title }}</h1>
      <Pager :data="$page.tag.belongsTo.pageInfo"></Pager>
      <CommunityCards :communities="$page.tag.belongsTo.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 15) @paginate {
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
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    };
  },
};
</script>
<style lang="scss" scoped></style>
