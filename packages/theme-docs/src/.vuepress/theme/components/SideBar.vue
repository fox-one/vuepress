<template>
  <v-navigation-drawer
    clipped
    permanent
    floating
    :app="app"
    :width="width"
    :style="style"
    class="f-docs-sidebar"
  >
    <div class="f-docs-sidebar__content">
      <side-bar-links :depth="0" :items="items" />
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SideBarLinks from "@theme/components/SideBarLinks.vue";

@Component({
  components: {
    SideBarLinks
  }
})
class SideBar extends Vue {
  @Prop() items;

  get app() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  get style() {
    const top = this.$vuetify.application.top;

    if (this.app) {
      return {};
    }

    return {
      position: "sticky",
      top: `${top}px`,
      height: `calc(100vh - ${top}px)`
    };
  }

  get width() {
    return this.app ? "220px" : undefined;
  }
}
export default SideBar;
</script>
