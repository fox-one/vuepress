<template>
  <f-tip :closeable="false" class="mb-4" v-bind="$attrs">
    <slot />
  </f-tip>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Tip extends Vue {}
export default Tip;
</script>

<style lang="scss" scoped>
.f-tip {
  ::v-deep {
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
