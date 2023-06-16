<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { onClickOutside, watchIgnorable } from '@vueuse/core'
import { useCurrentUser } from 'vuefire'
import { getAuth, signOut } from 'firebase/auth'
import { useNav } from '../composables/useNav'

const auth = getAuth()

const { toggleMenu, closeMenu, isMenuOpen } = useNav()

const route = ref<any>(useRoute())
const router = useRouter()

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    if (isMenuOpen.value === true) closeMenu()
  }
)

const logout = () =>
  signOut(auth)
    .then(() => {
      console.log('UNLOGIN')
    })
    .catch((error) => {
      // An error happened.
    })

const user = useCurrentUser()

// router.value.beforeEach((to, from, next) => {
//   // Close the menu here
//   isMenuHidden.value = true
//   next()
// })

const menu = ref(null)

onClickOutside(menu, (event) => {
  if (isMenuOpen.value === true) {
    closeMenu()
  }
})
</script>

<template>
  <header id="header" class="bg-gray-800 sticky top-0 z-50">
    <div
      class="flex shadow-2xl max-w-[90rem] mx-auto bg-opacity-1 sticky top-0 px-3 py-10 items-center h-[90px] justify-between md:justify-start z-10"
    >
      <div>
        <button class="relative peer cursor-pointer text-gray-100">
          <Icon v-if="!user" icon="game-icons:astronaut-helmet" width="48px" color="" />
          <Icon v-else icon="carbon:user-avatar-filled" width="48px" />
          <small>{{ user ? 'user' : 'login' }}</small>
        </button>
        <div
          class="rounded-lg absolute hidden peer-hover:flex hover:flex bg-gray-700 -bottom-12 shadow-lg py-2 text px-2 gap-2"
        >
          <ul v-if="user">
            <li>
              <Icon icon="material-symbols:settings-outline" class="inline" />
              Profile
            </li>
            <li>
              <Icon icon="carbon:favorite" class="inline" />
              Favorites
            </li>
            <li @click="logout">
              <Icon icon="material-symbols:logout-rounded" class="inline" />
              Sign out
            </li>
          </ul>
          <ul v-else>
            <li class="cursor-pointer">
              <RouterLink to="login"> Sign In </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- <div class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
            </div> -->

      <div class="md:order-3">
        <RouterLink to="/">
          <!-- <Icon icon="simple-icons:nasa"  width="80px" /> -->
          <Icon icon="simple-icons:nasa" width="80px" />
        </RouterLink>
      </div>
      <ul
        class="hidden md:flex justify-center w-full gap-5 font-michroma text-xl uppercase text-white"
      >
        <li
          :class="{ 'after:w-full': route.path === '/' }"
          class="text-teal-500 after:h-0.5 after:block after:w-0 after:bg-teal-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/">HOME</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/earth' }"
          class="text-pink-500 after:h-0.5 after:block after:w-0 after:bg-pink-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/earth">EARTH</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/epic' }"
          class="text-indigo-500 after:h-0.5 after:block after:w-0 after:bg-indigo-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/epic">EPIC</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/apod' }"
          class="text-yellow-400 after:h-0.5 after:block after:w-0 after:bg-yellow-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/apod">Apod</RouterLink>
        </li>
      </ul>

      <div class="z-50">
        <button
          v-if="!isMenuOpen"
          @click="toggleMenu"
          class="cursor-pointer z-50 text-gray-100 md:hidden"
        >
          <Icon icon="ri:menu-5-fill" class="transition-opacity duration-500" height="48px" />
          <small>menu</small>
        </button>

        <button v-else class="cursor-pointer z-50 text-gray-100 md:hidden">
          <Icon
            class="transition-opacity duration-500"
            icon="material-symbols:close"
            height="48px"
          />
          <small>menu</small>
        </button>
      </div>

      <ul
        ref="menu"
        :class="{ '-right-full': !isMenuOpen, 'right-0': isMenuOpen }"
        class="md:hidden fixed z-40 flex gap-5 items-center justify-center flex-col top-0 bg-gray-800 h-full w-[70%] font-michroma fond-bold text-xl transition-all duration-500 ease-in-out uppercase"
      >
        <li
          :class="{ 'after:w-full': route.path === '/' }"
          class="text-teal-500 after:h-0.5 after:block after:w-0 after:bg-teal-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/">HOME</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/earth' }"
          class="text-pink-500 after:h-0.5 after:block after:w-0 after:bg-pink-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/earth">EARTH</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/epic' }"
          class="text-indigo-500 after:h-0.5 after:block after:w-0 after:bg-indigo-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/epic">EPIC</RouterLink>
        </li>
        <li
          :class="{ 'after:w-full': route.path === '/apod' }"
          class="text-yellow-400 after:h-0.5 after:block after:w-0 after:bg-yellow-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
        >
          <RouterLink to="/apod">Apod</RouterLink>
        </li>
      </ul>
    </div>
  </header>

  <!-- <Icon icon="fa-solid:space-shuttle" />
  <Icon icon="streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy" />
<Icon icon="fa6-solid:user-astronaut"  width="50px"/> -->
</template>

<style scoped>
#menu {
  position: absolute;
  width: 180px;
  height: 400px;
  box-shadow: 0 0 10px #85888c;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background-color: #f5f6fa;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.bg-nav {
  background: radial-gradient(ellipse at center, rgba(11, 19, 43, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 300ms ease-in-out;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(100%);
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  transform: translateX(100%);
}
</style>
