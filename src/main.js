import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueI18n from "vue-i18n";
import sp from "./i18n/sp";
import en from "./i18n/en";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(VueAxios, axios);

let locale = "en";

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem("footmark-lang")) {
  locale = localStorage.getItem("footmark-lang");
  store.commit("setLang", locale);
} else {
  store.commit("setLang", locale);
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    sp: sp,
    en: en,
  },
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
