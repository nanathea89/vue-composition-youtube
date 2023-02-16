import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/ref",
      name: "ref",
      component: () => import('../views/RefView.vue')
    },
    {
      path: "/reactive",
      name: "reactive",
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: "/method",
      name: "method",
      component: () => import('../views/MethodView.vue')
    },
    {
      path: "/computed",
      name: "computed",
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: "/watcheffect",
      name: "watcheffect",
      component: () => import('../views/WatchEffectView.vue')
    },
    {
      path: "/lifecyclehook",
      name: "lifecyclehook",
      component: () => import('../views/LifeCycleView.vue')
    }
  ],
});

export default router;