const collections = [
  {
    query: `{
      allCommunity {
        edges {
          node {
            id
            title
            path
            description
            image
            location
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
        description: item.description,
        image: item.image,
        location: item.location,
      };
    },
  },
];

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
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      use: "gridsome-plugin-seo",
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
