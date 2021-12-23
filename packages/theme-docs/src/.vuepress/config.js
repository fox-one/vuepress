const { fs, path } = require("@vuepress/shared-utils");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  head: [
    [
      "link",
      { rel: "stylesheet", href: "https://static.fox.one/font/inter/style.css" }
    ],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      }
    ]
  ],
  plugins: [],
  markdown: {
    lineNumbers: true,
    plugins: [
      ["markdown-it-checkbox", { divWrap: true, divClass: "f-docs__task-item" }]
    ]
  },
  themeConfig: {
    displayAllHeaders: true,
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
  }
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
      children: fs
        .readdirSync(path.resolve(__dirname, "../plugin/official"))
        .map((filename) => "official/" + filename.slice(0, -3))
        .sort()
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
