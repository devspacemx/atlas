module.exports = {
  siteName: "Atlas de comunidades",
  siteDescription: "Atlas de comunidades tech en Latinoamérica",
  siteUrl: "https://devspacemx.github.io/atlas/",
  pathPrefix: "/atlas",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "comunidades/**/*.md",
        typeName: "Community",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000,
      },
    },
  ],
  templates: {
    Tag: "/tag/:id",
  },
  transformers: {
    remark: {
      autolinkClassName: "icon icon-link heading-anchor",
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
  css: {
    loaderOptions: {
      scss: {},
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
};
