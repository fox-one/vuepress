<template>
  <component
    :is="component"
    v-if="component"
    v-bind="{ ...$attrs, ...$props }"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "VueFile",
  inheritAttrs: false
})
class VueFile extends Vue {
  @Prop() file!: string;

  component = "";

  created() {
    this.load();
  }

  async load() {
    let component: any = {};

    try {
      component = await import(
        /* webpackChunkName: "examples" */
        /* webpackMode: "lazy-once" */
        `@examples/${this.file}.vue`
      );

      this.$emit("loaded", component.default);
    } catch (err) {
      component = await import("./ExampleMissing.vue");

      this.$emit("error", err);
    }

    this.component = component.default;
  }
}
export default VueFile;
</script>
