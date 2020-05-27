import Vue from "vue";
import VueRouter from "vue-router";
import ReqButton from "../page/button/index.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/button",
  name: "reqButton",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: ReqButton,
  meta: {
    title: 'button 按钮',
  }
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;