<template>
  <v-menu v-model="menu">
    <template #activator="{ on }">
      <span text :aria-label="ariaLabel" class="appbar-link" v-on="on">
        {{ item.text }}
      </span>
    </template>

    <v-list class="pa-4 appbar-menu__items">
      <div v-for="(sub, index) in item.items" :key="sub.link || index">
        <template v-if="sub.type === 'links'">
          <div class="appbar-menu__item-title">{{ sub.text }}</div>
          <f-divider class="mb-2" />

          <div class="appbar-menu__items">
            <div
              v-for="child in sub.items"
              :key="child.link"
              class="appbar-menu__item"
            >
              <app-bar-link :item="child" />
            </div>
          </div>
        </template>

        <div v-else class="appbar-menu__item">
          <app-bar-link :item="sub" />
        </div>
      </div>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import AppBarLink from "@theme/components/AppBarLink.vue";

@Component({
  components: {
    AppBarLink
  }
})
class AppBarDropDown extends Vue {
  @Prop() item;

  menu = false;

  get ariaLabel() {
    return this.item.ariaLabel || this.item.text;
  }
}
export default AppBarDropDown;
</script>
