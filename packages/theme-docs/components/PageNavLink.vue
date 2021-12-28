<template>
  <div v-if="link" :class="classes" class="page-nav-link">
    <div class="link-label">{{ label }}</div>

    <div class="link-value mt-2">
      <a
        v-if="isExternal"
        :href="path"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ text }}
        <OutboundLink />
      </a>

      <RouterLink v-else :to="path">
        {{ text }}
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { t } from "../util";

@Component
class PageNavLink extends Vue {
  @Prop() link;

  @Prop({ type: Boolean, default: false }) isNext;

  get classes() {
    return { "page-nav-link--next": this.isNext };
  }

  get label() {
    return t(this, this.isNext ? "next_page" : "prev_page");
  }

  get text() {
    return this.link.title || this.link.path;
  }

  get path() {
    return this.link.path;
  }

  get isExternal() {
    return this.link.type === "external";
  }
}
export default PageNavLink;
</script>

<style lang="scss" scoped>
.link-label {
  font-size: 12px;
  color: var(--v-greyscale_3-base);
}

.page-nav-link--next {
  text-align: right;
}
</style>
