import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faAdjust, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// Adding FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import VueFuse from "vue-fuse";
import "./assets/styles/scss/theme.scss";
import DefaultLayout from "./layouts/Default.vue";
import checkIfMobile from "./mixins/checkIfMobile";

config.autoAddCss = true;
library.add(faAdjust, faMapMarkerAlt);

// Import FontAwesome
Vue.component("font-awesome-icon", FontAwesomeIcon);
config.autoAddCss = true;

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueFuse);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(checkIfMobile);
  // Import FontAwesome
  Vue.component("font-awesome", FontAwesomeIcon);
}
