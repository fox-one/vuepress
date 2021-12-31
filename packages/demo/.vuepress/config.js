const { path, fs } = require("@vuepress/shared-utils");

module.exports = (ctx) => {
  return {
    title: "Fox.ONE UIKit",
    description:
      "Fox.ONE UIKit is a lib base on Vuetify, which contains customized styles for Fox.ONE Apps.",
    theme: "@foxone/vuepress-theme-docs",
    locales: {
      "/": {
        lang: "en-US",
        title: "VuePress",
        description: "Vue-powered Static Site Generator"
      },
      "/zh/": {
        lang: "zh-CN",
        title: "VuePress",
        description: "Vue 驱动的静态网站生成器"
      }
    },
    themeConfig: {
      logo: "/logo.png",
      locales: {
        "/": {
          label: "English",
          selectText: "Languages",
          ariaLabel: "Select language",
          editLinkText: "Edit this page on GitHub",
          lastUpdated: "Last Updated",
          nav: require("./nav/en"),
          sidebar: {
            "/api/": getApiSidebar(),
            "/guide/": getGuideSidebar("Guide", "Advanced"),
            "/plugin/": getPluginSidebar(
              "Plugin",
              "Introduction",
              "Official Plugins"
            ),
            "/theme/": getThemeSidebar("Theme", "Introduction")
          }
        },
        "/zh/": {
          label: "简体中文",
          selectText: "选择语言",
          ariaLabel: "选择语言",
          editLinkText: "在 GitHub 上编辑此页",
          lastUpdated: "上次更新",
          nav: require("./nav/zh"),
          sidebar: {
            "/zh/api/": getApiSidebar(),
            "/zh/guide/": getGuideSidebar("指南", "深入"),
            "/zh/plugin/": getPluginSidebar("插件", "介绍", "官方插件"),
            "/zh/theme/": getThemeSidebar("主题", "介绍")
          }
        }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@examples": path.resolve(__dirname, "../.examples")
        }
      }
    }
  };
};

function getApiSidebar() {
  return ["cli", "node"];
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "directory-structure",
        "basic-config",
        "assets",
        "markdown",
        "using-vue",
        "i18n",
        "deploy"
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        "frontmatter",
        "permalinks",
        "markdown-slot",
        "global-computed"
      ]
    }
  ];
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, "../plugin/official"))
  .map((filename) => "official/" + filename.slice(0, -3))
  .sort();

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ["", pluginIntro],
        "using-a-plugin",
        "writing-a-plugin",
        "life-cycle",
        "option-api",
        "context-api"
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins
    }
  ];
}

function getThemeSidebar(groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ["", introductionA],
        "using-a-theme",
        "writing-a-theme",
        "option-api",
        "default-theme-config",
        "blog-theme",
        "inheritance"
      ]
    }
  ];
}
