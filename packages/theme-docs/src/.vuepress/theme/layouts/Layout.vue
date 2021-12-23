<template>
  <v-app>
    <app-bar />

    <v-main>
      <v-container class="f-docs-container pa-0">
        <side-bar :items="sideBarItems" />

        <div class="f-docs-content__wrap">
          <Content class="f-docs-content" />
        </div>
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { resolveSidebarItems } from "../util";
import SideBar from "@theme/components/SideBar.vue";
import AppBar from "@theme/components/AppBar.vue";
import AppFooter from "@theme/components/AppFooter.vue";
import Content from "@vuepress/core/lib/client/components/Content";

@Component({
  components: {
    SideBar,
    AppBar,
    AppFooter,
    Content
  }
})
class Layout extends Vue {
  get showSideBar() {
    const isHome = this.$page.frontmatter.home;

    return (
      !isHome &&
      this.$page.frontmatter.sidebar !== false &&
      this.sideBarItems.length
    );
  }

  get sideBarItems() {
    return resolveSidebarItems(
      this.$page,
      this.$page.regularPath,
      this.$site,
      this.$localePath
    );
  }

  mounted() {}
}
export default Layout;
</script>

<style lang="scss" scoped>
.f-docs-container {
  display: grid;
  grid-template-columns: 0fr 1fr;
}

.f-docs-content__wrap {
  padding-left: 24px;
}

@media (min-width: 960px) {
  .f-docs-content__wrap {
    padding-left: 36px;
  }
}

@media (min-width: 1264px) {
  .f-docs-content__wrap {
    padding-left: 64px;
  }
}
</style>
