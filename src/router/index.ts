import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import UserRoutes from './user.routes';
import AuthRoutes from './auth.routes';
import UIRoutes from './ui.routes';
import LandingRoutes from './landing.routes';
import UtilityRoutes from './utility.routes';
import PagesRoutes from './pages.routes';
import AiRoutes from './ai.routes';
// import ChartsRoutes from './charts.routes';
// import UmlRoutes from './uml.routes';
// import AppsRoutes from './apps.routes';
// import DataRoutes from './data.routes';

export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {},
  } as any,
  {
    path: '/dashboard',
    meta: {
      requiresAuth: true,
      layout: 'landing',
    },
    component: () => import('@/views/pages/DashBoard.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/errors/NotFoundPage.vue'),
  },
  ...UserRoutes,
  ...LandingRoutes,
  ...AuthRoutes,
  ...PagesRoutes,
  ...UtilityRoutes,
  ...UIRoutes,
  ...AiRoutes,
  // ...AppsRoutes,
  // ...DataRoutes,
  // ...ChartsRoutes,
  // ...UmlRoutes,
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [];

const router = createRouter({
  history: createWebHistory(),
  // hash模式：createWebHashHistory，history模式：createWebHistory
  // process.env.NODE_ENV === "production"

  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Global navigation guard for authentication
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // Check if route requires authentication
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    // 简化逻辑：只检查本地状态，401错误由API层统一处理
    if (!authStore.isAuthenticated) {
      // 如果本地没有认证状态，直接跳转到登录页
      next({
        name: 'auth-signin',
        query: { redirect: to.fullPath },
      });
      return;
    }
    // 如果本地有认证状态，继续访问，如果服务端验证失败会在API层处理
  }

  // If user is authenticated and trying to access auth pages, redirect to dashboard
  if (authStore.isAuthenticated && to.path.startsWith('/auth/')) {
    next('/dashboard');
    return;
  }

  next();
});

export default router;
