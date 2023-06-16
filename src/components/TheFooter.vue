<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer>
    <div class="py-8 text-gray-500">
      <Icon class="mx-auto h-auto" icon="simple-icons:nasa" width="100px" />
      <h3 class="text-xl text-center">Image viewer made with Vue 3, TailwindCSS and Firebase</h3>
      <div class="flex items-center justify-center gap-5 mt-6">
        <a class="text-white gap-5" href="https://twitter.com/GerganovEmanuil">
          <Icon icon="ant-design:twitter-circle-filled" width="40px" />
        </a>
        <a
          class="text-white items-center gap-5 flex"
          href="https://www.linkedin.com/in/emanuil-gerganov/"
        >
          <Icon icon="logos:linkedin-icon" width="40px" />
        </a>
        <a class="text-white items-center gap-5 flex" href="https://github.com/EmanuilGerganov">
          <Icon icon="mdi:github" width="40px" />
        </a>
      </div>
      <div class="text-center pt-5 text-gray-00">
        <span class="text-sm tracking-wide"
          >Copyright © Emanuil Gerganov <span id="year"></span> | All rights reserved</span
        >
        
      </div>
    </div>
  </footer>
</template>
