import { createRouter, createWebHistory } from "vue-router";

// Örnek refactored rota yapısı
export const routes = [
  {
    path: "/",
    redirect: { name: "Home" },
    component: () => import("@/layouts/default/Default.vue"),
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
            name: "albums",
            component: () => import("@/layouts/default/AlbumsDefault.vue"),
            redirect: { name: "albums" },
            children: [
              {
                path: "",
                name: "albums",
                component: () => import("@/views/albums/AlbumsView.vue"),
                meta: { title: "Albums" },
              },
              {
                path: "album-detail/:album_id",
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

export default router;
