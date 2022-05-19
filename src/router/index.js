import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/authorization",
    name: "authorization",
    component: () => import("../views/authorization-block.vue"),
  },
  {
    path: "/",
    name: "",
    component: () => import("../views/loading-block.vue"),
  },
  {
    path: "/loader",
    name: "loader",
    component: () => import("../views/loader-main.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
