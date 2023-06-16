import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EpicView from '../views/EpicView.vue'
import EarthView from '../views/EarthView.vue'
import AstronomyPictureOFTheDayView from '@/views/AstronomyPictureOFTheDayView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import UserView from '../views/UserView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import { useCurrentUser } from 'vuefire'
import { useNav } from '../composables/useNav'

const restrictUser = (to, from, next) => {
  const user = useCurrentUser()
  console.log(user)

  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/epic', name: 'epic', component: EpicView },
    { path: '/apod', name: 'apod', component: AstronomyPictureOFTheDayView },
    { path: '/earth', name: 'earth', component: EarthView },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      beforeEnter: restrictUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: restrictUser
    },
    { path: '/register', name: 'register', component: RegisterView, beforeEnter: restrictUser },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccountView,
      beforeEnter: restrictUser
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
