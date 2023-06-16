<script setup></script>

<template>
  <main class="min-h-screen px-10 pt-16 max-w-[1400px] mx-auto">
    <h1 class="text-4xl leading-relaxed font-bold mb-8 text-center font-michroma"><slot name="heading"></slot></h1>

    <Suspense>
      <template #default>
        <slot name="image"> FETCH IMAGE DEFAULT </slot>
      </template>
      <template #fallback> SKELETON LOADER</template>
    </Suspense>
  </main>
</template>
