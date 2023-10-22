import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
      meta: {
        title: "Verifikasi Page",
      },
    },
    {
      path: "/:pathMatch(.*)*", //event page not found when search
      name: "not-found",
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "page not found",
      },
    },
  ],
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title
      ? toRoute.meta.title
      : import.meta.env.VITE_APP_NAME;

  next();
});

export default router;
