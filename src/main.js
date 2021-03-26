import DefaultLayout from "~/layouts/Default.vue";
import "./assets/styles/scss/theme.scss";
import checkIfMobile from "./mixins/checkIfMobile";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(checkIfMobile);
}
