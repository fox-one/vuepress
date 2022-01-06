<template>
  <v-app>
    <ClientOnly>
      <app-bar :items="sideBarItems" />
    </ClientOnly>

    <v-main>
      <v-container class="f-docs-container pa-0">
        <ClientOnly>
          <side-bar v-if="showSideBar" :items="sideBarItems" />
        </ClientOnly>

        <page-content :sidebar-items="sideBarItems">
          <Content class="f-docs-content" />
        </page-content>
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
import PageContent from "@theme/components/PageContent.vue";

@Component({
  components: {
    SideBar,
    AppBar,
    AppFooter,
    PageContent
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
  display: flex;
}
</style>
