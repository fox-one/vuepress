<template>
  <code-section class="my-0" v-bind="$attrs">
    <prism ref="code" :code="code" :inline="inline" :language="language" />
  </code-section>
</template>

<script>
// Components
import Prism from "vue-prism-component";

export default {
  name: "Markup",

  components: { Prism },

  props: {
    code: String,
    inline: Boolean,
    language: String
  }
};
</script>
