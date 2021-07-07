<template>
  <Layout>
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-8">
          <p>
            <g-image
              immediate
              class="mb-1 image-fluid mx-auto d-block"
              width="200"
              :src="$page.community.image"
              :alt="`Logotipo ${$page.community.title}`"
            />
          </p>
          <h1 v-html="$page.community.title" class="mb-2" />
          <div v-html="$page.community.content" class="text-black" />
        </div>
        <div class="col-lg-4 sidebar">
          <div class="sidebar-box">
            <h3>Tags</h3>
            <div class="tagcloud">
              <g-link
                :to="item.path"
                v-for="item in $page.community.tags"
                :key="item.id"
              >
                {{ item.title }}
              </g-link>
            </div>
          </div>
          <div class="sidebar-box">
            <h3>Sobre esta comunidad</h3>
            <p>
              {{ $page.community.description }}
            </p>
          </div>
          <div class="sidebar-box">
            <h3>Ubicación</h3>
            <p class="fw-normal mb-0">
              <font-awesome :icon="['fas', 'map-marker-alt']" />
              {{ $page.community.location }}
            </p>
          </div>
          <div class="sidebar-box">
            <h3>Redes</h3>
            <p v-for="social in validSocial" v-bind:key="social">
              <font-awesome-icon
                :icon="[...icons[social]]"
                size="lg"
                fixed-width
              />
              <a
                target="_blank"
                rel="noreferrer"
                :href="urls[social] + $page.community[social]"
              >
                {{ urls[social] + $page.community[social] }}</a
              >
            </p>
          </div>
          <div v-if="hasTwitter" class="sidebar-box">
            <h3>Twitter</h3>
            <a
              class="twitter-timeline"
              data-height="400"
              data-dnt="true"
              :href="`https://twitter.com/${$page.community.twitter}`"
              >Tweets by {{ $page.community.twitter }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Community ($path: String!) {
  community (path: $path) {
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
    telegram
    github
    web
    location
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      socialMedia: [
        "twitter",
        "telegram",
        "facebook",
        "github",
        "web",
        "instagram",
      ],
      icons: {
        twitter: ["fab", "twitter"],
        telegram: ["fab", "telegram"],
        facebook: ["fab", "facebook"],
        github: ["fab", "github"],
        web: ["fas", "link"],
        instagram: ["fab", "instagram"],
      },
      urls: {
        twitter: "https://twitter.com/",
        telegram: "https://t.me/",
        facebook: "https://facebook.com/",
        github: "https://github.com/",
        web: "",
        instagram: "https://instagram.com/",
      },
    };
  },
  computed: {
    hasTwitter: function() {
      return this.$page.community.twitter !== "";
    },
    validSocial: function() {
      return this.socialMedia.filter(
        (item) => this.$page.community[item] !== ""
      );
    },
  },
  metaInfo() {
    const image = this.$page.community.image?.src;
    const imagePath = this.$url(image);
    return this.$seo({
      title: this.$page.community.title,
      description: this.$page.community.description,
      keywords: `atlas,atlas comunidades,atlas tech,...${
        this.$page.community.tags
      }`,
      lang: "es",
      language: "Spanish",
      image: imagePath,
      openGraph: {
        title: this.$page.community.title,
        type: "website",
        image: imagePath,
      },
      twitter: {
        title: this.$page.community.title,
        type: "summary",
        image: imagePath,
      },
      script: [{ src: "https://platform.twitter.com/widgets.js", body: true }],
    });
  },
};
</script>
