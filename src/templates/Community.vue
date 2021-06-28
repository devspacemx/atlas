<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-8">
          <p>
            <g-image immediate class="mb-1" width="200" :src="$page.post.image" />
          </p>
      <h1 v-html="$page.post.title" class="mb-2"/>
      <CommunityContent :content="$page.post.content"/>
        </div>
        <!-- .col-md-8 -->
        <div class="col-lg-4 sidebar pl-lg-5">
          <div class="sidebar-box">
            <h3>Tags</h3>
            <div class="tagcloud">
        <g-link
          :to="item.path"
          v-for="item in $page.post.tags"
          :key="item.id"
        >
        {{item.title}}
        </g-link>
            </div>
          </div>
          <div class="sidebar-box">
            <h3>Sobre esta comunidad</h3>
            <p>
              {{$page.post.description}}
            </p>
          </div>
          <div class="sidebar-box">
            <h3>Redes</h3>
            <p>
              Twitter: {{$page.post.twitter}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Community ($path: String!) {
  post: community (path: $path) {
    title
    date
    content
    image (width: 300, quality: 90)
    description
    tags {
      title
      path
    }
    twitter
    facebook
    instagram
    github
    web
  }
}
</page-query>

<script>
import CommunityContent from '../components/CommunityContent.vue'

export default {
  components: {
    CommunityContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
