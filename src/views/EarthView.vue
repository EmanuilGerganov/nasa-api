<script setup lang="ts">
import { ref, onMounted } from 'vue'

import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import InnerImageZoom from 'vue-inner-image-zoom'

const latitude = ref<string | number>(0)
const longitude = ref<string | number>(0)
const imageUrl = ref('')


onMounted(async () => {
  try {
    if (navigator.geolocation) {
      const position: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
    } else {
      console.log('No navigator available')
    }

    const date = new Date()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const key = import.meta.env.VITE_NASA_API_KEY

    const response = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lat=${latitude.value}&lon=${longitude.value}&date=2021-${month}-${day}&&dim=0.10&api_key=${key}
`
    )

    const data = await response.json()
    imageUrl.value = data.url
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
    <div class="min-h-screen px-4 md:px-10 pt-16 max-w-[1400px] mx-auto">
      <h1
        class="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"
      >
        Welcome to Earth image of the day!
      </h1>

   
      <div class="relative aspect-[1/1] max-w-2xl h-auto mx-auto z-10">
        <div v-if="!imageUrl"  class="skeleton-loader" />
        <inner-image-zoom v-else :height="1000" :width="1000" :src="imageUrl" />
      </div>
    </div>
  
</template>

<style scoped>
.skeleton-loader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  overflow: hidden;
}

.skeleton-loader::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: #212121;
  border-radius: 50%;
  animation: skeleton-loader-pulse 2s ease-in-out infinite;
}

@keyframes skeleton-loader-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
}

.skeleton-loader::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80%;
  border-radius: 50%;
  box-shadow: 0 0 20px #fff;
  animation: skeleton-loader-rotate 3s linear infinite;
}

@keyframes skeleton-loader-rotate {
  0% {
    transform: translateX(-50%) rotate(0);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}
</style>
