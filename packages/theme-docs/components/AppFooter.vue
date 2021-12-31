<template>
  <v-footer app absolute color="greyscale_6" class="pa-4 app-footer">
    <v-flex>
      <div class="app-footer-links">
        <div class="app-footer-links__group">
          <div class="app-footer-links__title">Community</div>
          <div
            v-for="(link, index) in links"
            :key="index"
            class="app-footer-links__item"
          >
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text--primary"
            >
              {{ link.title }}
            </a>
            <OutboundLink />
          </div>
        </div>

        <div class="app-footer-links__group">
          <div class="app-footer-links__title">Products</div>
          <div
            v-for="(product, index) in products"
            :key="index"
            class="app-footer-links__item"
          >
            <a
              :href="product.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text--primary"
            >
              {{ product.title }}
            </a>
            <OutboundLink />
          </div>
        </div>
      </div>

      <v-row justify="center" no-gutters>
        <v-col class="py-4 text-center" cols="12">
          Copyright © 2020 - {{ new Date().getFullYear() }}
          <strong>@Fox.ONE</strong>
        </v-col>
      </v-row>
    </v-flex>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppFooter extends Vue {
  get links() {
    return [
      { title: "Discord", href: "https://discord.com/invite/ek45g3Cymd" },
      { title: "Twitter", href: "https://twitter.com/pando_im" },
      { title: "Github", href: "https://github.com/fox-one" }
    ];
  }

  get products() {
    return [
      {
        title: "Pando Leaf",
        href: "https://pando.im/leaf"
      },
      {
        title: "Pando Rings",
        href: "https://pando.im/rings"
      },
      {
        title: "Pando Lake",
        href: "https://pando.im/lake"
      }
    ];
  }
}
export default AppFooter;
</script>

<style lang="scss" scoped>
.app-footer {
  padding: 16px;
  z-index: 11;
}

.app-footer-links {
  display: flex;
  justify-content: space-evenly;

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__item {
    padding: 8px 0;
  }
}
</style>
