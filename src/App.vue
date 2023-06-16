<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import { Icon } from '@iconify/vue'
import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth()

console.log(import.meta.env.MODE,'base')

console.log(auth, 'ATH')
</script>

<template>
  <div class="bg-gray-900 text-white">
    <TheNavbar />

    <RouterView class="font-montserrat" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <main class="bg-gray-900 min-h-screen px-4 md:px-10 max-w-[90rem] mx-auto">
          <component :is="Component" :key="$route.path"></component>
        </main>
      </transition>
    </RouterView>

    <TheFooter />
    <!-- <footer id="footer">
      <div class="py-20 flex flex-col justify-center items-center">
        <h3>CONTACT ME</h3>
        <div class="flex gap-5 mt-6">
          <a
            class="text-white  gap-5"
            href="https://twitter.com/GerganovEmanuil"
          >
            <Icon icon="ant-design:twitter-circle-filled" width="30px" />
          </a>
          <a class="text-white items-center gap-5 flex" href="https://twitter.com/GerganovEmanuil">
            <Icon icon="logos:linkedin-icon" width="30px" />
          </a>
          <a class="text-white items-center gap-5 flex" href="https://twitter.com/GerganovEmanuil">
            <Icon icon="mdi:github" width="30px" />
          </a>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<style scoped>
fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
