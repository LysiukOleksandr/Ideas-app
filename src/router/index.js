import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      store.getters.checkUser ? next() : next("/login");
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters.checkUser) {
        next("/");
      }
    }
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
    beforeEnter(to, from, next) {
      if (store.getters.checkUser) {
        next("/");
      }
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
