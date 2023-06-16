<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  url: string
}>()

const responseData = ref<any>(null)
const responseError = ref<Error | null>(null)

const fetchImage = async () => {
  try {
    const response = await fetch(props.url)
    responseData.value = await response.json()
  } catch (error) {
    responseError.value = error as Error
  }
}

await fetchImage()
</script>

<template>
  {{ responseData }}

  <img :src="responseData.url" alt="" />
</template>
