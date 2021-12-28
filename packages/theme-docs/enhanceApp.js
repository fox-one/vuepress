import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit";
import { mergeDeep } from "vuetify/lib/util/helpers";
import locales from "./locales.json";
import store from "./store";

import "@foxone/uikit/build/index.min.css";
import "@theme/styles/index.scss";

export default ({
  Vue,
  options, // options for root Vue instance: new Vue(options)
  // router,
  siteData
}) => {
  Vue.use(Vuetify);
  Vue.use(UIKit);
  Vue.use(Vuex);

  const vuetifyOptions = siteData.themeConfig.vuetifyOptions || {};
  const preset = mergeDeep(UIKit.preset, {
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
  });

  options.vuetify = new Vuetify(mergeDeep(preset, vuetifyOptions));
  Vue.mixin({ store });
};
