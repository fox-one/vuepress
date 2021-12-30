<template>
  <div v-if="prev || next" class="page-nav">
    <page-nav-link :link="prev" />
    <v-spacer />
    <page-nav-link :link="next" is-next />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { resolvePage } from "../util";
import isString from "lodash/isString";
import isNil from "lodash/isNil";
import PageNavLink from "@theme/components/PageNavLink.vue";

const links = {
  next: {
    resolve: (current, pages) => find(current, pages, 1),
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  prev: {
    resolve: (current, pages) => find(current, pages, -1),
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
};

function resolvePageLink(
  linkType,
  { $page, $route, $site, $themeConfig, sidebarItems }
) {
  const { getPageLinkConfig, getThemeLinkConfig, resolve } = linkType;

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig);

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page);

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig;

  if (link === false) {
    return;
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path);
  } else {
    return resolve($page, sidebarItems);
  }
}

@Component({
  inheritAttrs: false,
  components: {
    PageNavLink
  }
})
class PageNav extends Vue {
  @Prop() sidebarItems;

  get prev() {
    return resolvePageLink(links.prev, this);
  }

  get next() {
    return resolvePageLink(links.next, this);
  }
}

function find(page, items, offset) {
  const res: any[] = [];

  flatten(items, res);

  for (let i = 0; i < res.length; i++) {
    const cur = res[i];

    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flatten(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flatten(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}

export default PageNav;
</script>

<style lang="scss" scoped>
.page-nav {
  display: flex;
  align-items: center;
  padding: 32px 0;
}
</style>
