import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import * as icons from "@foxone/icons";
import { mergeDeep } from "vuetify/lib/util/helpers";
import locales from "./locales.json";
import store from "./store";
import pageComponents from "@internal/page-components";

import "@foxone/uikit/build/index.min.css";
import "@theme/styles/index.scss";

export default ({
  Vue,
  isServer,
  options, // options for root Vue instance: new Vue(options)
  // router,
  siteData
}) => {
  const vuetifyOptions = siteData.themeConfig.vuetifyOptions || {};
  let customConfig = {
    icons: {
      values: {
        ...Object.keys(icons).reduce((m, k) => {
          m[k] = { component: icons[k] };

          return m;
        }, {})
      }
    },
    lang: { locales },
    theme: {
      themes: {
        light: {
          primary: "#000000",
          accent: "#076AFF",
          anchor: "#076AFF"
        },
        dark: {
          primary: "#FFFFFF",
          accent: "#076AFF",
          anchor: "#076AFF"
        }
      }
    }
  };

  if (!isServer) {
    if (!options.vuetify) {
      const vuetify = new Vuetify(mergeDeep(customConfig, vuetifyOptions));

      options.vuetify = vuetify;
    }

    const UIKit = require("@foxone/uikit");

    customConfig = mergeDeep(UIKit.preset, customConfig);

    Vue.use(UIKit);
    Vue.use(UIKit.Toast, () => options.vuetify, { top: false, centered: true });
    Vue.use(UIKit.Dialog, () => options.vuetify, { flat: true });
  } else {
    const vuetify = new Vuetify(mergeDeep(customConfig, vuetifyOptions));

    options.vuetify = vuetify;
  }

  Vue.use(Vuetify);
  Vue.use(Vuex);
  Vue.mixin({ store });

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component);
  }
};
