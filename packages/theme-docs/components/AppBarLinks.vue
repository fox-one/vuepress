<template>
  <nav v-if="userLinks.length || repoLink" class="appbar-links">
    <div v-for="item in userLinks" :key="item.link" class="appbar-link__item">
      <app-bar-menu v-if="item.type === 'links'" :item="item" />
      <app-bar-link v-else :item="item" />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink />
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBarMenu from "@theme/components/AppBarMenu.vue";
import AppBarLink from "@theme/components/AppBarLink.vue";
import { resolveNavLinkItem } from "../util";

@Component({
  components: {
    AppBarMenu,
    AppBarLink
  }
})
class AppBarLinks extends Vue {
  get userNav() {
    return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
  }

  get nav() {
    const { locales } = this.$site;

    if (locales && Object.keys(locales).length > 1) {
      const currentLink = this.$page.path;
      const routes = this.$router.options.routes || [];
      const themeLocales = this.$site.themeConfig.locales || {};

      const languageDropdown = {
        text: this.$themeLocaleConfig.selectText || "Languages",
        ariaLabel: this.$themeLocaleConfig.ariaLabel || "Select language",
        items: Object.keys(locales).map((path) => {
          const locale = locales[path];
          const text =
            (themeLocales[path] && themeLocales[path].label) || locale.lang;

          let link;

          // Stay on the current page
          if (locale.lang === this.$lang) {
            link = currentLink;
          } else {
            // Try to stay on the same page
            link = currentLink.replace(this.$localeConfig.path || "", path);
            // fallback to homepage

            if (!routes.some((route) => route.path === link)) {
              link = path;
            }
          }

          return { text, link };
        })
      };

      return [...this.userNav, languageDropdown];
    }

    return this.userNav;
  }

  get userLinks() {
    return (this.nav || []).map((link) => {
      return Object.assign(resolveNavLinkItem(link), {
        items: (link.items || []).map(resolveNavLinkItem)
      });
    });
  }

  get repoLink() {
    const { repo } = this.$site.themeConfig;

    if (repo) {
      return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
    }

    return null;
  }

  get repoLabel() {
    if (!this.repoLink) return "";

    if (this.$site.themeConfig.repoLabel) {
      return this.$site.themeConfig.repoLabel;
    }

    const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
    const platforms = ["GitHub", "GitLab", "Bitbucket"];

    for (let i = 0; i < platforms.length; i++) {
      const platform = platforms[i];

      if (new RegExp(platform, "i").test(repoHost)) {
        return platform;
      }
    }

    return "Source";
  }
}
export default AppBarLinks;
</script>
