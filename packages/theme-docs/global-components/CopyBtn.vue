<template>
  <v-btn
    absolute
    icon
    right
    top
    style="background-color: inherit"
    @click="copy"
  >
    <v-fade-transition hide-on-leave>
      <v-icon
        :key="String(clicked)"
        color="grey"
        v-text="clicked ? '$complete' : '$FIconCopy'"
      />
    </v-fade-transition>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { wait } from "../util";

@Component
class CopyBtn extends Vue {
  @Prop() target;

  clicked = false;

  wait = 2000;

  async copy() {
    const el = this.target();

    el.setAttribute("contenteditable", "true");
    el.focus();

    document.execCommand("selectAll", false);
    document.execCommand("copy");

    el.removeAttribute("contenteditable");

    this.clicked = true;

    await wait(this.wait);

    this.clicked = false;
  }
}
export default CopyBtn;
</script>
