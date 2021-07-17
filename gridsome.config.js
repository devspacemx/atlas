const collections = [
  {
    query: `{
      allCommunity {
        edges {
          node {
            id
            title
            path
            image (width: 50, quality: 40)
            location {
              title
            }
            tags {
              title
              path
            }
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allCommunity.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME || "communities", // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        path: item.path,
        location: item.location.title,
        tags: [...item.tags],
        image: item.image.src,
      };
    },
  },
];

module.exports = {
  siteName: "Atlas de comunidades",
  siteDescription:
    "Conoce las comunidades tecnológicas que te rodean y súmate a ellas, ven y conoce la plataforma 👋",
  siteUrl: "https://comunidades.lat",
  // pathPrefix: "/atlas",
  chainWebpack(config) {
    config.mode("development");
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./comunidades",
        path: "*.md",
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
          location: {
            typeName: "Location",
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
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-201768696-1",
      },
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: false, // default: false
      },
    },
    {
      use: "gridsome-plugin-seo",
    },
  ],
  templates: {
    Tag: "/tag/:id",
    Location: "/ubicacion/:id",
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
