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
import { getLocale } from "@foxone/utils/helper";

@Component({
  inheritAttrs: false,
  components: {
    PageEdit,
    PageNav
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm: any) => {
      vm.setLang();
    });
  }
})
class PageContent extends Vue {
  setLang() {
    const locale = getLocale();

    this.$vuetify.lang.current = locale;
  }
}
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
