import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../layouts/Dashboard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:'active',
  routes: [
    {
      path: "/login",
      name: "login",
      component: ()=> import('../views/LoginView.vue')
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
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
      component: () => import('../views/ComputedView.vue'),
      beforeEnter: () =>{
        console.log('cek sebelum masuk ')
      }
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
    },
    {
      path: "/suspense",
      name: "suspense",
      component: () => import('../views/SuspenseView.vue')
    }
      ]
    },
   
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  const isAuth = JSON.parse(localStorage.getItem('isAuth'))
  if(to.name != 'login' && !isAuth){
    next({name: 'login'})
  }else  if(to.name == 'login' && isAuth){
    next({name: 'home'})
  }else{

    next()
  }
  // if(to.name =='logout' && isAuth){
  //   console.log('logout')
  //   localStorage.removeItem('isAuth')
  //   next({name: to.name})
  // }
})

export default router;
