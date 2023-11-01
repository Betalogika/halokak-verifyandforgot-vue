import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Beranda.vue"),
      meta: {
        title: "Verifikasi Page",
      },
    },
    {
      path: "/token/:token/expire",
      name: "token-expire",
      component: () => import("@/views/TokenExpire.vue"),
      props: false, //hide props
      meta: {
        title: "Token Expire Page",
      },
    },
    {
      path: "/forgot/:token/expire",
      name: "forgot-expire",
      component: () => import("@/views/ForgotTokenExpire.vue"),
      props: false, //hide props
      meta: {
        title: "Forgot Expire Page",
      },
    },
    {
      path: "/forgot/password",
      name: "forgot-password",
      component: () => import("@/views/ForgotPassword.vue"),
      props: false, //hide props
      meta: {
        title: "Forgot Password Page",
      },
    },
    {
      path: "/success/change/password",
      name: "success-change-password",
      component: () => import("@/views/SuccessChangePassword.vue"),
      props: false, //hide props
      meta: {
        title: "Success Change Password",
      },
    },
    {
      path: "/success/forgot/password",
      name: "success-forgot-password",
      component: () => import("@/views/SuccessForgotPassword.vue"),
      props: false, //hide props
      meta: {
        title: "Success Forgot Password",
      },
    },
    {
      path: "/auth/verify/:token/account",
      name: "verify",
      component: () => import("@/views/VerifyAccount.vue"),
      meta: {
        title: "Verify Account",
      },
    },
    {
      path: "/auth/forgot/:token/password",
      name: "change-password",
      component: () => import("@/views/ChangePassword.vue"),
      meta: {
        title: "Change Password",
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
