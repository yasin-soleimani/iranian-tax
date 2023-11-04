// import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);
export const bus = new Vue();
export default new Vuetify({
  rtl: true,
  icons: {
    iconfont: "fa",
  },
});
