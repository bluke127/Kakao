import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/MainPage.vue'),
    redirect: '/tabs/today',
    children: [
      {
        path: '/tabs/today',
        name: 'Today',
        component: () => import('@/views/Today.vue'),
      },
      {
        path: '/tabs/fresh',
        name: 'Fresh',
        component: () => import('@/views/Fresh.vue'),
      },
      {
        path: '/tabs/popular',
        name: 'Popular',
        component: () => import('@/views/Popular.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
