module.exports = {
  siteName: "Atlas de comunidades",
  siteDescription: "Atlas de comunidades tech en Latinoamérica",
  siteUrl: "https://atlas.devspace.mx",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/comunidades/*.md",
        typeName: "Community",
        route: "/comunidades/:slug",
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            create: true,
          },
        },
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
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
