<template>
  <RouterLink :to="$localePath" class="appbar-title text--primary">
    <v-img
      v-if="logo"
      :src="logoPath"
      :alt="$title"
      width="32"
      max-width="32"
    />
    <span v-if="!hideText && title" class="appbar-name">{{ title }}</span>
  </RouterLink>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class SiteTitle extends Vue {
  @Prop({ type: Boolean, default: false }) hideText!: boolean;

  get logo() {
    return this.$site.themeConfig.logo;
  }

  get title() {
    return this.$siteTitle;
  }

  get logoPath() {
    return this.$withBase(this.$site.themeConfig.logo);
  }
}
export default SiteTitle;
</script>
