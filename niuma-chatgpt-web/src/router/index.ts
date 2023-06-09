import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
// 路由数组
const routes: RouteRecordRaw[] = [
  {
    path: "/setting",
    component: () => import("../view/Setting.vue"),
  },
  {
    path: "/history",
    component: () => import("../view/History.vue"),
  },
  {
    path: "/",
    component: () => import("../view/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("../view/Main.vue"),
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
