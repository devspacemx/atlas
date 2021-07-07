import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// Adding FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import InstantSearch from "vue-instantsearch";
import "./assets/styles/scss/theme.scss";
import DefaultLayout from "./layouts/Default.vue";
import checkIfMobile from "./mixins/checkIfMobile";

config.autoAddCss = true;
library.add(
  faMapMarkerAlt,
  faLink,
  faTwitter,
  faFacebook,
  faGithub,
  faTelegram,
  faDiscord,
  faInstagram
);

// Import FontAwesome
Vue.component("font-awesome-icon", FontAwesomeIcon);
config.autoAddCss = true;

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(checkIfMobile);
  // Import FontAwesome
  Vue.component("font-awesome", FontAwesomeIcon);
  // Add Instant Search
  Vue.use(InstantSearch);
}
