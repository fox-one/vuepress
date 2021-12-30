<template>
  <v-sheet
    :dark="isDark"
    :rounded="rounded"
    color="greyscale_6"
    class="overflow-hidden"
    dir="ltr"
    outlined
  >
    <slot />

    <copy-btn :target="target" class="mr-n2 mt-n2" />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Code"
})
class CodeSection extends Vue {
  @Prop({ type: Boolean, default: true }) rounded;

  get isDark() {
    return this.$vuetify.theme.dark;
  }

  target() {
    return this.$el.querySelector("pre");
  }
}
export default CodeSection;
</script>
