<template>
  <v-footer app absolute color="">
    <v-row justify="center" no-gutters>
      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Fox.ONE VuePress</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppFooter extends Vue {}
export default AppFooter;
</script>
