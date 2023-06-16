<script setup lang="ts">
import PrimaryLinkButton from '@/components/PrimaryLinkButton.vue'
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl py-10 md:py-20 lg:flex lg:h-1/4 lg:items-center">
      <div class="mx-auto max-w-5xl text-center">
        <h1
          class="font-michroma bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl leading-9 font-extrabold text-transparent sm:text-5xl sm:leading-[1.3]"
        >
          Welcome to NASA image viewer !

          <span class="sm:block"> </span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl sm:text-xl/relaxed">
          Explore the wonders of space and the beauty of our planet with NASA Image Viewer. This
          website allows you to dive into a vast collection of captivating images captured by NASA's
          satellites and telescopes. Create account today and save your favorite photos !
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/login"
            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            LOGIN
          </RouterLink>

          <RouterLink
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            to="/register"
          >
            REGISTER</RouterLink
          >
        </div>
      </div>
    </div>
  </section>

  <img class="aspect-[16/9] mx-auto rounded-xl" src="../assets/apod.webp" alt="" />
  <div class="max-w-lg text-center mx-auto">
    <h2 class="font-michroma text-2xl text-yellow-400 font-bold text-center py-10">
      Astronomy Picture of the Day
    </h2>
    <p class="text-lg mb-6">
      Discover the Astronomy Picture of the Day, showcasing stunning imagery from the vast reaches
      of space. Each day, a new captivating image will be featured, offering a glimpse into the
      awe-inspiring wonders of our universe.
    </p>
    <PrimaryLinkButton text="GO TO APOD" link="/apod" color="bg-yellow-400" />
  </div>

  <!-- <section id="apod">
      <div class="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div class="flex-[2] max-w-2xl w-full">
          <img
            width="1080"
            height="608"
            class="aspect-[16/9] object-cover rounded-xl"
            src="../assets/apod.webp"
            alt=""
          />
        </div>
        <div class="flex-[1] max-w-lg">
          <h2 class="font-michroma text-2xl text-yellow-400 font-bold text-center py-10">
            Astronomy Picture of the Day
          </h2>
          <p class="text-lg mb-6">
            Discover the Astronomy Picture of the Day, showcasing stunning imagery from the vast
            reaches of space. Each day, a new captivating image will be featured, offering a glimpse
            into the awe-inspiring wonders of our universe.
          </p>
          <div class="text-center">
            <RouterLink to="/apod">
              <button
                class="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-500"
              >
                GO TO APOD
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section> -->

  <section id="epic">
    <div class="flex flex-col items-center justify-center gap-10 lg:flex-row pt-10">
      <div class="flex-[2] max-w-2xl w-full order-1 lg:order-2">
        <img
          width="700"
          height="700"
          class="rounded-xl w-full h-full"
          src="../assets/epic-api.webp"
          alt=""
        />
      </div>
      <div class="flex-[1] order-2 lg:order-1">
        <h2 class="font-michroma text-2xl text-indigo-500 font-bold text-center py-10">
          Earth Polychromatic Imaging Camera
        </h2>
        <p class="text-lg mb-6">
          Explore the EPIC API section to view the most recent enhanced Earth image captured by
          NASA's DSCOVR satellite. Witness the dynamic changes occurring on Earth's surface, from
          swirling storms to dazzling city lights, as you delve into a gallery of visually stunning
          pictures.
        </p>
        <PrimaryLinkButton text="GO TO EPIC" link="/epic" color="bg-indigo-500" />
      </div>
    </div>
  </section>

  <section id="earth">
    <div class="flex flex-col items-center justify-center gap-10 lg:flex-row pt-10">
      <div class="flex-[2] max-w-2xl w-full">
        <img
          width="700"
          height="700"
          class="rounded-xl w-full h-full"
          src="../assets/earth-api.webp"
          alt=""
        />
      </div>
      <div class="flex-[1]">
        <h2 class="font-michroma text-2xl text-pink-500 font-bold text-center py-10">
          Earth Polychromatic Imaging Camera
        </h2>
        <p class="text-lg mb-6">
          Experience the unique perspective of Earth from space with our Earth Images section. By
          leveraging NASA's Earth API and your current location, you'll be able to view a
          mesmerizing image of our planet as seen from above. See the intricate details of Earth's
          landscapes, weather patterns, and natural phenomena, reminding us of the fragile and
          remarkable nature of our home.
        </p>
        <PrimaryLinkButton text="GO TO EARTH" link="/earth" color="bg-pink-600" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-blend {
  background-blend-mode: multiply;
}

.bg-space {
  background: radial-gradient(ellipse at center, rgba(11, 19, 43, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%);
}
</style>
