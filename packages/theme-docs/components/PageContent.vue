<template>
  <div class="f-docs-content__wrap">
    <slot />

    <page-nav v-bind="$attrs" />

    <f-divider />

    <page-edit v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

@Component({
  inheritAttrs: false,
  components: {
    PageEdit,
    PageNav
  }
})
class PageContent extends Vue {}
export default PageContent;
</script>

<style lang="scss" scoped>
.f-docs-content__wrap {
  padding-left: 24px;
  padding-right: 24px;
  flex: 1;
  overflow: hidden;
}

@media (min-width: 960px) {
  .f-docs-content__wrap {
    padding-left: 36px;
    padding-right: 36px;
  }
}

@media (min-width: 1264px) {
  .f-docs-content__wrap {
    padding-left: 64px;
  }
}
</style>
