import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import App from "../view/Layout.vue";
import Main from "../view/Main.vue";
import Setting from "../view/Setting.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/",
    component: App,
    children: [
      {
        path: "",
        component: Main,
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
