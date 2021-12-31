<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon v-if="mdAndDown" @click="handleToggleSideBar" />

    <site-title />

    <v-spacer />

    <app-bar-links v-if="!mdAndDown" />

    <v-btn icon small class="mr-0" @click="handleToggleTheme">
      <v-icon> $mdiBrightness4 </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBarLinks from "@theme/components/AppBarLinks.vue";
import SiteTitle from "@theme/components/SiteTitle.vue";

@Component({
  components: {
    AppBarLinks,
    SiteTitle
  }
})
class AppBar extends Vue {
  get mdAndDown() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  handleToggleSideBar() {
    const sidebar = this.$store.state.app.sidebar;

    this.$store.commit("SET_SIDEBAR", !sidebar);
  }

  handleToggleTheme() {
    const value = !(this as any).$vuetify.theme.dark;

    (this as any).$vuetify.theme.dark = value;
  }
}
export default AppBar;
</script>

<style lang="scss" scoped>
.theme--dark .v-app-bar {
  box-shadow: 0px 2px 4px -1px rgb(255 255 255 / 0%),
    0px 4px 5px 0px rgb(255 255 255 / 0%),
    0px 1px 10px 0px rgb(255 255 255 / 12%) !important;
}
</style>
