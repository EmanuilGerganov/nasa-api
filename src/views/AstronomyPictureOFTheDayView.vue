<script setup lang="ts">
import { ref, onMounted } from 'vue'

const url: string = 'https://api.nasa.gov/planetary/apod?api_key='
const key: string = import.meta.env.VITE_NASA_API_KEY
const dateImage = ref<string>('')

// must be computed

const date = new Date()
const year = date.getFullYear()

let month: number | string = date.getMonth() + 1
let day: number | string = date.getDate()

if (month < 10) month = '0' + month
if (day < 10) day = '0' + day

const today = `${year}-${month}-${day}`
dateImage.value = today

interface ApodObject {
  date: string
  explanation: string
  hdurl: string
  url: string
  media_type: string
  title: string
}

const apod = ref<ApodObject | null>(null)

const getNewApod = async () => {
  const response = await fetch(`${url}${key}&date=${dateImage.value}`)
  const data = await response.json()
  apod.value = data
}

//  to do refresh loading component
onMounted(async () => {
  const response = await fetch(url + key)
  const data = await response.json()

  apod.value = data
})
</script>

<template>
  <main>
    <div class="text-white min-h-screen p-3 sm:p-10 max-w-[1400px] mx-auto">
      <h1
        class="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"
      >
        Welcome to Astronomy Picture of The Day !
      </h1>

      <div v-if="!apod" class="skeleton-earth" />
      <div v-else class="gap-10 h-auto mx-auto flex flex-col">
        <h2 v-if="apod.title" class=" uppercase text-yellow-400 text-center font-bold text-xl">{{ apod.title }}</h2>
        <div class="max-w- xl:max-w-4xl mx-auto">
          <iframe
            v-if="apod.media_type === 'video'"
            class="h-full w-full aspect-video"
            :src="apod.url.substring(0, apod.url.length - 6)"
            frameborder="0"
          />

          <img v-else :src="apod.hdurl ? apod.hdurl : apod.url" alt="" />
        </div>

        <div class="text-lg flex-[0] text-center">
          <span class="text-white font-lg">Pick a Date - get new image or video of the day </span>
          <input
            :max="dateImage"
            @change="getNewApod"
            v-model="dateImage"
            id="indate"
            class="mt-5 md:ml-5 rounded-full bg-indigo-500 ring-yellow-400 py-2.5 text-black px-5 text-xl font-bold cursor-pointer"
            type="date"
          />
          <p class="py-5 text-left font-extralight">{{ apod.explanation }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.skeleton-earth {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(29, 53, 87, 0.8) 0%, rgba(0, 0, 0, 0.8) 70%);
  animation: skeleton-earth-spin 2s linear infinite;
}

@keyframes skeleton-earth-spin {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
