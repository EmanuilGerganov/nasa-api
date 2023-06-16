<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  text: string
  color: string
  link: string
}>()

</script>

<template>
  <div class="text-center">
    <RouterLink :to="link">
      <button
        :class="props.color"
        class="text-black italic ital py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
      >
        {{ text }}
      </button>
    </RouterLink>
  </div>
</template>
a
