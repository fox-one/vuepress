<template>
  <section :class="classes">
    <v-layout
      class="f-docs-sidebar__heading"
      :class="{ 'f-docs-sidebar__heading--open': open }"
    >
      <v-flex>
        <router-link
          v-if="item.path"
          :to="item.path"
          @click.native="$emit('toggle')"
        >
          <span>{{ item.title }}</span>
        </router-link>

        <div v-else @click="$emit('toggle')">
          <span>{{ item.title }}</span>
        </div>
      </v-flex>

      <v-icon
        v-if="collapsable"
        size="16"
        class="f-docs-sidebar__heading-arrow"
      >
        $FIconChevronDown4P
      </v-icon>
    </v-layout>

    <side-bar-links
      v-if="open || !collapsable"
      class="f-docs-sidebar__group--items"
      :items="item.children"
      :sidebar-depth="item.sidebarDepth"
      :initial-open-group-index="item.initialOpenGroupIndex"
      :depth="depth + 1"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { isActive } from "../util";

@Component
class SideBarGroup extends Vue {
  @Prop() item;

  @Prop() open;

  @Prop() collapsable;

  @Prop() depth;

  get classes() {
    return {
      "f-docs-sidebar__group": true,
      "f-docs-sidebar__group--collapsable": this.collapsable,
      "f-docs-sidebar__group--is-subgroup": this.depth !== 0,
      [`f-docs-sidebar__group__level-${this.depth}`]: true
    };
  }

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    (this.$options.components as any).SideBarLinks =
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("@theme/components/SideBarLinks.vue").default;
  }

  isActive = isActive;
}
export default SideBarGroup;
</script>
