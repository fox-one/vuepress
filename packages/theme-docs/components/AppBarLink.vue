<template>
  <RouterLink
    v-if="isInternal"
    class="appbar-link text--primary"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    {{ item.text }}
  </RouterLink>
  <a
    v-else
    :href="link"
    :target="target"
    :rel="rel"
    class="appbar-link appbar-link--external text--primary"
    @focusout="focusoutAction"
  >
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { isExternal, isMailto, isTel, ensureExt } from "../util";

@Component
class AppBarLink extends Vue {
  @Prop() item;

  get link() {
    return ensureExt(this.item.link);
  }

  get exact() {
    if (this.$site.locales) {
      return Object.keys(this.$site.locales).some(
        (rootLink) => rootLink === this.link
      );
    }

    return this.link === "/";
  }

  get target() {
    if (this.isNonHttpURI) {
      return null;
    }

    if (this.item.target) {
      return this.item.target;
    }

    return isExternal(this.link) ? "_blank" : "";
  }

  get rel() {
    if (this.isNonHttpURI) {
      return null;
    }

    if (this.item.rel === false) {
      return this.item.rel;
    }

    return this.isBlankTarget ? "noopener noreferrer" : null;
  }

  get isInternal() {
    return !isExternal(this.link) && !this.isBlankTarget;
  }

  get isNonHttpURI() {
    return isMailto(this.link) || isTel(this.link);
  }

  get isBlankTarget() {
    return this.target === "_blank";
  }

  focusoutAction() {
    this.$emit("focusout");
  }
}
export default AppBarLink;
</script>
