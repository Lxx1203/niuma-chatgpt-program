import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Main from "../view/Main.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Main,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
