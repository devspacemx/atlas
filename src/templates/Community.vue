<template>
  <Layout>
    <g-image immediate class="blogImage mb-4" :src="$page.post.image" />
    <div class="community">
      <h1 v-html="$page.post.title" class="mb-4" />
      <div class="meta">
        <div class="box author">
          <span class="label">Author</span>
          <span class="author-name" v-text="$page.post.author" />
        </div>
        <div class="box date">
          <span class="label">Date</span>
          <div v-text="new Date($page.post.date).toLocaleDateString()" />
        </div>
        <div class="box time">
          <span class="label">Time</span>
          <span>{{ $page.post.timeToRead }} min read</span>
        </div>
      </div>
      <Community class="mt-5" :content="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Community ($path: String!) {
  post: community (path: $path) {
    title
    author
    date
    timeToRead
    content
    image
  }
}
</page-query>

<script>
import Community from "@/components/CommunityContent";

export default {
  components: {
    Community,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;

  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
