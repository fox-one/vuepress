<template>
  <v-sheet class="" outlined rounded>
    <v-lazy min-height="42" @mouseenter="handleImportTemplate">
      <div class="text-end pa-2">
        <v-btn
          v-for="(action, i) in actions"
          :key="i"
          icon
          small
          :disabled="hasError"
          :aria-label="action.path"
          @click="action.onClick"
        >
          <v-icon :size="16" v-text="action.icon" />
        </v-btn>
      </div>
    </v-lazy>

    <v-divider />

    <div v-if="pen">
      <v-expand-transition>
        <div v-show="expand">
          <v-item-group v-model="selected" class="pa-2" mandatory>
            <template v-for="(section, i) in sections">
              <v-item :key="`item-${i}`" :value="section">
                <template #default="{ active, toggle }">
                  <v-btn
                    :input-value="active"
                    text
                    small
                    class="mr-2"
                    @click="toggle"
                  >
                    {{ section }}
                  </v-btn>
                </template>
              </v-item>
            </template>
          </v-item-group>

          <v-divider />

          <v-window v-model="selected" class="greyscale_6">
            <template v-for="(section, i) in sections">
              <v-window-item :key="`window-${i}`" :value="section">
                <markup :code="pen[section]" :rounded="false" />
              </v-window-item>
            </template>
          </v-window>

          <v-divider />
        </div>
      </v-expand-transition>
    </div>

    <v-theme-provider :dark="dark">
      <v-sheet class="pa-4" rounded>
        <vue-file :file="file" @error="hasError = true" />
      </v-sheet>
    </v-theme-provider>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mdiCodeBraces } from "@mdi/js";

@Component({
  name: "Example"
})
class Example extends Vue {
  @Prop() file!: string;

  dark = false;

  expand = false;

  hasError = false;

  selected = "template";

  pen: any = {};

  get sections() {
    return ["template", "script", "style"].filter(
      (section) => this.pen[section]
    );
  }

  get actions() {
    return [
      {
        icon: mdiCodeBraces,
        path: "view-source",
        onClick: () => (this.expand = !this.expand)
      }
    ];
  }

  async handleImportTemplate() {
    try {
      const file = (this as any).file;
      const template = await import(
        /* webpackChunkName: "examples" */
        /* webpackMode: "lazy-once" */ `!!raw-loader!@examples/${file}.vue`
      );

      this.boot(template.default);
    } catch (err) {
      console.log(err);
    }
  }

  boot(res) {
    const template = this.parseTemplate("template", res);
    const style = this.parseTemplate("style", res);
    const script = this.parseTemplate("script", res);

    (this as any).pen = {
      template,
      style,
      script
    };
  }

  parseTemplate(target, template) {
    const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
    const regex = new RegExp(string, "g");
    const parsed = regex.exec(template) || [];

    return parsed[1] || "";
  }
}
export default Example;
</script>
