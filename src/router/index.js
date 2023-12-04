import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", // Parametre üst düzeyde tanımlanmalı
    component: () => import("@/layouts/default/Default.vue"),
    redirect: { name: "Home" },

    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "user-view/:user_id",
        name: "user-view",
        component: () => import("@/layouts/default/UserLayout.vue"),
        redirect: { name: "todos" },
        meta: { title: "Ana Sayfa" },
        children: [
          {
            path: "todos",
            name: "todos",
            component: () => import("@/views/TodosView.vue"),
            meta: { title: "Todos" },
          },
          {
            path: "posts",
            name: "posts",
            component: () => import("@/views/PostsView.vue"),
            meta: { title: "Posts" },
          },
          {
            path: "albums",
            component: () => import("@/layouts/default/AlbumsDefault.vue"),
            meta: { title: "Albums" },
            children: [
              {
                path: "", // Albums sayfasının detayları için
                name: "albums",
                component: () => import("@/views/albums/AlbumsView.vue"),
              },
              {
                path: "album-detail/:album_id", // Albüm detayları için ID ile
                name: "album-detail",
                component: () =>
                  import("@/views/albums/albums-details/AlbumDetail.vue"),
                meta: { title: "Album Detail" },
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  console.log("gdidiyo ", from, to);
});

export default router;
