<template functional>
  <markdown-section
    class="f-docs-example-missing text-center"
    v-text="parent.$t('missing', data.attrs)"
  ></markdown-section>
</template>

<script>
import MarkdownSection from "./MarkdownSection.vue";
export default {
  components: { MarkdownSection },
  name: "ExampleMissing"
};
</script>
