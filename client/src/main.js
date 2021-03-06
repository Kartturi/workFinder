import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faPlus, faMinus, faTimes, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import BackToTop from 'vue-backtotop'

Vue.use(BackToTop)
Vue.config.productionTip = false;
library.add(faArrowRight, faPlus, faMinus, faTimes, faArrowUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
