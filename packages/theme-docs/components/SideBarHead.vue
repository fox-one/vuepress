<template>
  <div class="f-docs-sidebar__head">
    <site-title />

    <f-divider class="my-4" />

    <app-bar-links />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteTitle from "@theme/components/SiteTitle.vue";
import AppBarLinks from "@theme/components/AppBarLinks.vue";

@Component({
  components: {
    SiteTitle,
    AppBarLinks
  }
})
class SideBarHead extends Vue {}
export default SideBarHead;
</script>
