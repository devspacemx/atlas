module.exports = {
  siteName: "Atlas de comunidades",
  siteDescription: "Atlas de comunidades tech en Latinoamérica",
  siteUrl: "https://atlas.devspace.mx",
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
