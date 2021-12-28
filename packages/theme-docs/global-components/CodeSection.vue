<template>
  <v-sheet
    :color="isDark ? '#1F1F1F' : 'grey lighten-5'"
    :dark="isDark"
    :rounded="rounded"
    class="overflow-hidden"
    dir="ltr"
    outlined
  >
    <slot />

    <app-copy-btn :target="target" class="mr-n2 mt-n2" />
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
}
export default CodeSection;
</script>
