<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import PrimaryLinkButton from './PrimaryLinkButton.vue'

const email = ref<string>('')
const password = ref<string>('')

const router = useRouter()

const auth = useFirebaseAuth()
const provider = new GoogleAuthProvider()

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)

    const token = credential?.accessToken
    const user = result.user

    if (user) router.push('/')
  } catch (error) {
    console.log(error)
  }
}

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// const register = () =>
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       // ..
//     })
</script>

<template>
  <div
    class="max-w-md flex flex-col bg-gray-800 items-center justify-center p-10 m-auto rounded-xl"
  >
    <button
      @click="googleLogin"
      class="text-gray-400 flex mb-10 items-center justify-center gap-4 w-full rounded-full px-2 py-2 border-2 active:bg-gray-500 bg-gray-800 border-gray-600 hover:bg-gray-600 hover:border-gray-700"
    >
      <Icon icon="flat-color-icons:google" width="20px"></Icon>
      Sign in with Google
    </button>
    <div class="relative w-full flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">or</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <label for="" class="pb-2 self-start">Email</label>
    <input
      placeholder="name@example.com"
      type="email"
      class="w-full mb-2 rounded-full bg-gray-700 px-6 py-1.5"
    />
    <label for="" class="pb-2 self-start">Password</label>
    <input
      placeholder="••••••••"
      type="password"
      class="mb-2 rounded-full w-full bg-gray-700 px-6 py-1.5"
    />
    <small class="self-end justify-self-end text-sm font-extralight">Forgot Password ?</small>

    <button class="mt-10 bg-teal-500 py-3 w-full px-6 text-xl font-bold rounded-lg">LOGIN</button>
  </div>
</template>

<style scoped></style>
