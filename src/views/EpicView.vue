<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface RecentImageObject {
  date: string
  caption: string
  image: string
  url: string
}

const recentImagesUrl: string = 'https://epic.gsfc.nasa.gov/api/enhanced'
const recentImageObject = ref<RecentImageObject | null>(null)

const res = ref<any>(null)

onMounted(async () => {
  try {
    const response = await fetch(recentImagesUrl)
    const images = await response.json()

    const mostRecentImageObject = images.reduce((first: any, second: any) => {
      const prevDate: Date = new Date(first.date)
      const nextDate: Date = new Date(second.date)

      return prevDate > nextDate ? first : second
    })

    const mostRecentImageDate: string = mostRecentImageObject.date.slice(0, 10).replaceAll('-', '/')

    console.log(mostRecentImageObject)

    recentImageObject.value = {
      date: mostRecentImageObject.date,
      caption: mostRecentImageObject.caption,
      image: mostRecentImageObject.image,
      url: `https://epic.gsfc.nasa.gov/archive/enhanced/${mostRecentImageDate}/png/${mostRecentImageObject.image}.png`
    }
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <h1
      class="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"
    >
      Welcome to Earth Polychromatic Imaging Camera
    </h1>

    <h2></h2>

    <div class="relative aspect-[1/1] max-w-2xl h-auto mx-auto">
      <div v-if="!recentImageObject" class="skeleton-earth" />
      <img v-else width="1000" height="1000" class="w-full h-auto" :src="recentImageObject.url" />

      <div v-if="recentImageObject" class="text-xl text-center font-extralight">
        <h2 class="py-5">{{ recentImageObject.caption }}</h2>
        <div>
          {{ recentImageObject.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-earth {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(90deg, #0088ff, #00ff88, #ff0088, #0088ff);
  background-size: 400% 400%;
  animation: skeleton-earth-spin 2s linear infinite;
}

@keyframes skeleton-earth-spin {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
