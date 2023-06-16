<script setup>
import { ref } from 'vue'
// import { useGeolocation } from '@vueuse/core'

const latitude = ref(null)
const longitude = ref(null)

const fetchLocation = async () => {
  try {
    if (navigator.geolocation) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
    } else {
      console.log('No navigator available')
    }
  } catch (error) {
    console.error('Error retrieving geolocation:', error)
  }
}

const getLocation = async () => await fetchLocation()

await getLocation()

const date = new Date()
const month = String(date.getMonth() + 1).padStart(2, '0')
const day = String(date.getDate()).padStart(2, '0')

const image = ref(null)
const key = import.meta.env.VITE_NASA_API_KEY

const response = await fetch(
  `https://api.nasa.gov/planetary/earth/assets?lat=${latitude.value}&lon=${longitude.value}&date=2021-${month}-${day}&&dim=0.10&api_key=${key}
`
)

const data = await response.json()
image.value = data
</script>

<template>
  <div class="flex justify-center items-center">
    <img :src="image.url" alt="" class="h-auto max-w-4xl w-full" />
  </div>
</template>
