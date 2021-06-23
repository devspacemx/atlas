<template>
  <Layout>
    <div class="container">
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
            <form action="#" class="search-form">
              <div class="form-group">
                <span class="fa fa-search"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
            </form>
          </div>
          <div class="sidebar-box">
            <h3>Tags</h3>
            <div class="tagcloud">
        <g-link
          to="/"
          v-for="item in $page.post.tags"
          :key="item"
        >
        {{item}}
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
    tags
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
