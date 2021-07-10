<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-10 order-1">
          <h1 class="fw-bold">Comunidades con el tag: {{ $page.tag.title }}</h1>
          <Pager :data="$page.tag.belongsTo.pageInfo"></Pager>
          <CommunityCards :communities="$page.tag.belongsTo.edges" />
        </div>
        <div class="col-lg-2 sidebar order-0">
          <div class="sidebar-box mt-2">
            <h3>Tags</h3>
            <div class="tagcloud">
              <g-link
                v-for="item in $page.tags.edges"
                :to="item.node.path"
                :key="item.node.id"
                v-bind:class="(isCurrentTag(item.node.title) ? 'text-info' : '')"
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
  methods: {
    isCurrentTag(tag){
      return tag === this.$page.tag.title;
    },
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    };
  },
};
</script>
<style lang="scss" scoped></style>
