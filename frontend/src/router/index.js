import { createRouter, createWebHistory } from 'vue-router'
import { createPinia, storeToRefs } from 'pinia'
import { createApp } from 'vue'
import { useLoginStatusStore } from '../stores/loginStatus.js'

import App from '../App.vue'
import WelcomeView from '../views/public/WelcomeView.vue'
import SplashView from '../views/public/SplashView.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/public/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/public/SignUpView.vue')
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: () => import('../views/public/ForgotPasswordView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/protected/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/sounds',
      name: 'sounds',
      component: () => import('../views/protected/SoundsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/player',
      name: 'soundPlayer',
      component: () => import('../views/protected/SoundPlayerView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/protected/ProfileView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/meditation',
      name: 'meditation',
      component: () => import('../views/protected/MeditationView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/gratitude',
      name: 'gratitude',
      component: () => import('../views/protected/GratitudeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/affirmations',
      name: 'affirmations',
      component: () => import('../views/protected/AffirmationsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('../views/protected/GoalsView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {

    const loginStatusStore = useLoginStatusStore()
    const { isLoggedIn } = storeToRefs(loginStatusStore)
    console.log("Router", isLoggedIn.value)

    if (!isLoggedIn.value) {
      next({
        name: 'welcome'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
