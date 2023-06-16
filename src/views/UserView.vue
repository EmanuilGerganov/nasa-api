<script setup>
import { useCurrentUser } from 'vuefire'
import {useNav} from '../composables/useNav.ts'


const {closeMenu } =useNav()

closeMenu()

const user = useCurrentUser()
</script>

<template>
    <div class="text-white min-h-screen p-10 max-w-[1400px] mx-auto">
      <h1
        class="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"
      >
        User account
      </h1>

      <div class="flex flex-col justify-center items-center text-">
        <img :src="user.photoURL" alt="user image" class="h-[200px] w-[200px] rounded-full" />

        <div class="mt-10 flex justify-between items-end">
          {{ user.displayName }}
        </div>
        <div class="mt-5">
          {{ user.email }}
        </div>

        <div class="mt-10">
          <h2 class="text-xl md:text-2xl font-bold mb-8 text-center font-michroma">
            FAVORITE IMAGES
          </h2>
        </div>
      </div>

      <div></div>
      <Login />
    </div>
</template>
