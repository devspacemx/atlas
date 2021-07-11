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
          <div v-if="hasLocation" class="sidebar-box">
            <h3>Ubicación</h3>
            <p class="fw-normal mb-0">
              <font-awesome size="lg" :icon="['fas', 'map-marker-alt']" />
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
    path
    image (width: 400, quality: 100)
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
import shajs from "sha.js";

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
        "youtube",
      ],
      icons: {
        twitter: ["fab", "twitter"],
        telegram: ["fab", "telegram"],
        facebook: ["fab", "facebook"],
        github: ["fab", "github"],
        web: ["fas", "link"],
        instagram: ["fab", "instagram"],
        youtube: ["fab", "youtube"],
      },
      urls: {
        twitter: "https://twitter.com/",
        telegram: "https://t.me/",
        facebook: "https://facebook.com/",
        github: "https://github.com/",
        web: "",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
      },
    };
  },
  computed: {
    hasTwitter: function() {
      return this.$page.community.twitter !== "";
    },
    hasLocation: function() {
      return this.$page.community.location !== "";
    },
    validSocial: function() {
      return this.socialMedia.filter(
        (item) => this.$page.community[item] !== ""
      );
    },
  },
  metaInfo() {
    const siteURL = 'https://devspacemx.github.io';
    const pageURL = encodeURI(
      `${siteURL}/atlas${this.$page.community.path}?v=${shajs(
        "sha256"
      )
        .update(this.$page.community.content)
        .digest("hex")}`
    );
    const imageURL = encodeURI(
      `${siteURL}${this.$page.community.image.src}`
    );
    const logoURL = encodeURI(`${siteURL}/atlas/logo.png`);
    const socialImage =
      `https://motif.imgix.com/i?url=${pageURL}` +
      `&image_url=${imageURL}` +
      `&color=94a2b3&` +
      `logo_url=${logoURL}` +
      `&logo_alignment=top%2Cleft` +
      `&text_alignment=bottom%2Cleft&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d`;
    return this.$seo({
      title: this.$page.community.title,
      baseUrl: `${siteURL}/atlas`,
      description: this.$page.community.description,
      keywords: `atlas,atlas comunidades,atlas tech,${this.$page.community.title},${([
        ...this.$page.community.tags.map((tag) => tag.title),
      ])}`,
      lang: "es",
      language: "Spanish",
      image: socialImage,
      openGraph: {
        title: this.$page.community.title,
        type: "website",
        image: socialImage,
      },
      twitter: {
        title: this.$page.community.title,
        type: "summary_large_image",
        image: socialImage,
      },
      script: [{ src: "https://platform.twitter.com/widgets.js", body: true }],
    });
  },
};
</script>
