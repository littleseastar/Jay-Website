//建立新頁面要在這邊設定url
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Practice from "@/views/PracticeArea.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/PracticeArea",
    name: "PracticeArea",
    component: Practice,
    meta: {
      title: "vue練習區",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//顯示title — 連結
// to：你要去的那一頁的路由物件 from：你目前所在的那一頁 next()：你要叫 Vue 繼續導航（不寫就卡住）
router.beforeEach((to, from, next) => {
  const defaultTitle = "小霖專案";
  document.title = to.meta.title
    ? `${defaultTitle} — ${to.meta.title}`
    : defaultTitle;
  next();
});

export default router;
