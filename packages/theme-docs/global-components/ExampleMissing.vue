<template>
  <markdown-section
    class="f-docs-example-missing text-center"
    v-text="t('miss_file')"
  ></markdown-section>
</template>

<script>
import MarkdownSection from "./MarkdownSection.vue";
import { Vue, Component } from "vue-property-decorator";
import { t } from "../util";

@Component({
  name: "ExampleMissing",
  inheritAttrs: false,
  components: { MarkdownSection }
})
class ExampleMissing extends Vue {
  t = (key) => t(this, key);
}

export default ExampleMissing;
</script>
