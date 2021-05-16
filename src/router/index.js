import Vue from "vue";
import VueRouter from "vue-router";
import CheckOut from "../views/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CheckOut",
    component: CheckOut,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
