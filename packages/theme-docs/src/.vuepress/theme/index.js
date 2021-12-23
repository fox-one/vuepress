const path = require("path");
const { VuetifyLoaderPlugin } = require("vuetify-loader");

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;

  return {
    chainWebpack: (config) => {
      // add vuetify loader plugin
      config.plugin("vuetify").use(VuetifyLoaderPlugin);

      // for sass-loader ^8.0
      for (const lang of ["sass", "scss"]) {
        for (const name of ["modules", "normal"]) {
          const rule = config.module.rule(lang).oneOf(name);
          const additionalData =
            lang === "scss"
              ? "@import '@theme/styles/_variables.scss';"
              : "@import '@theme/styles/_variables.scss'";

          rule.uses.delete("sass-loader");
          rule
            .use("sass-loader")
            .loader("sass-loader")
            .options({
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: lang === "sass"
              },
              additionalData
            });
        }
      }
    },

    plugins: [
      [
        "@vuepress/active-header-links",
        { sidebarLinkSelector: ".f-docs-sidebar__link" }
      ],
      "vuepress-plugin-typescript",
      "@vuepress/plugin-nprogress",
      "@vuepress/last-updated",
      ["smooth-scroll"]
    ]
  };
};
