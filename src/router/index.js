import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", // Parametre üst düzeyde tanımlanmalı
    component: () => import("@/layouts/default/Default.vue"),
    redirect:{name: 'home'},
    children: [
      {
        path: "home", 
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: 'user-view/:id',
        name: 'user-view',
        component: () => import("@/layouts/default/Default.vue"),
        redirect:{name:'todos'},
        children:[
          {
            path: "todos",
            name: "todos",
            component: () => import("@/views/Todos.vue"),
          },
          {
            path: "posts",
            name: "posts",
            component: () => import("@/views/Posts.vue"),
          },
          {
            path: "albums",
            component: () => import("@/layouts/default/AlbumsDefault.vue"),
            children: [
              {
                path: "", // Albums sayfasının detayları için
                name: "albums",
                component: () => import("@/views/albums/Albums.vue"),
              },
              {
                path: "album-detail/:id", // Albüm detayları için ID ile
                name: "album-detail",
                component: () => import("@/views/albums/albums-details/AlbumDetail.vue"),
              },
            ],
          },
        ]
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
