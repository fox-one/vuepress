<template>
  <div v-if="show" class="f-docs-sidebar__links">
    <template v-for="(item, index) in items">
      <side-bar-group
        v-if="item.type && item.type === 'group'"
        :item="item"
        :depth="depth"
        :open="index === openGroupIndex"
        :collapsable="item.collapsable"
        :key="index"
        @toggle="handleToggleGroup(index)"
      />
      <side-bar-link
        v-else
        :item="item"
        :sidebar-depth="sidebarDepth"
        :key="index"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import SideBarGroup from "@theme/components/SideBarGroup.vue";
import SideBarLink from "@theme/components/SideBarLink.vue";
import { isActive } from "../util";

@Component({
  components: {
    SideBarGroup,
    SideBarLink
  }
})
class SideBarLinks extends Vue {
  @Prop() items;

  @Prop() depth!: number;

  @Prop() sidebarDepth!: number;

  @Prop() initialOpenGroupIndex!: number;

  openGroupIndex = this.initialOpenGroupIndex || 0;

  get show() {
    return this.items.length;
  }

  mounted() {
    this.handleSetOpenGroupIndex();
  }

  @Watch("$route")
  handleSetOpenGroupIndex() {
    const index = resolveOpenGroupIndex(this.$route, this.items);

    if (index > -1) {
      this.openGroupIndex = index;
    }
  }

  handleToggleGroup(index) {
    this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
  }
}

// get current group opened index according to route
function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    if (isDescendantActive(route, items[i])) {
      return i;
    }
  }

  return -1;
}

function isDescendantActive(route, item) {
  if (item.type !== "group") {
    return false;
  }

  const isChildActive = item.path && isActive(route, item.path);
  const isGrandChildActive = item.children.some((child) => {
    if (child.type === "group") {
      return isDescendantActive(route, child);
    } else {
      return child.type === "page" && isActive(route, child.path);
    }
  });

  return isChildActive || isGrandChildActive;
}
export default SideBarLinks;
</script>
