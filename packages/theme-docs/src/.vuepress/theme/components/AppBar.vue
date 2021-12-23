<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Collapsing Bar</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-checkbox color="white" hide-details></v-checkbox>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppBar extends Vue {}
export default AppBar;
</script>
