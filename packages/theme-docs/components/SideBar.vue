<template>
  <v-navigation-drawer
    v-model="sidebar"
    clipped
    floating
    :permanent="!mdAndDown"
    :fixed="mdAndDown"
    :temporary="mdAndDown"
    :app="mdAndDown"
    :width="width"
    :style="style"
    :class="classes"
  >
    <side-bar-head v-if="mdAndDown" />

    <div class="f-docs-sidebar__content">
      <side-bar-links :depth="0" :items="items" />
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SideBarLinks from "@theme/components/SideBarLinks.vue";
import SideBarHead from "@theme/components/SideBarHead.vue";

@Component({
  components: {
    SideBarLinks,
    SideBarHead
  }
})
class SideBar extends Vue {
  @Prop() items;

  get sidebar() {
    return this.mdAndDown ? this.$store.state.app.sidebar : true;
  }

  set sidebar(value) {
    if (this.mdAndDown) {
      this.$store.commit("SET_SIDEBAR", value);
    }
  }

  get mdAndDown() {
    return this.$vuetify.breakpoint.mdAndDown;
  }

  get style() {
    const top = this.$vuetify.application.top;

    if (this.mdAndDown) {
      return {};
    }

    return {
      position: "sticky",
      top: `${top}px`,
      height: `calc(100vh - ${top}px)`
    };
  }

  get classes() {
    return {
      "f-docs-sidebar": true,
      "f-docs-sidebar--overflow": this.mdAndDown,
      "f-docs-sidebar--flat": !this.mdAndDown
    };
  }

  get width() {
    return !this.mdAndDown ? "220px" : "256px";
  }
}
export default SideBar;
</script>
