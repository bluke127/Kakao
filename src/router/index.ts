import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/MainPage.vue'),
    redirect: '/today',
    children: [
      {
        path: '/today',
        name: 'Today',
        component: () => import('@/views/Today.vue'),
      },
      {
        path: '/fresh',
        name: 'Fresh',
        component: () => import('@/views/Fresh.vue'),
      },
      {
        path: '/popular',
        name: 'Popular',
        component: () => import('@/views/Popular.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
