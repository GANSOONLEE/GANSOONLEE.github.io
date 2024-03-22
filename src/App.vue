<template>
  <div class="fixed top-0 w-[100vw] h-[100vh] -z-10">
    <img class="w-full h-full object-cover opacity-20 blur-sm" src="../public/img/background.webp" alt="">
  </div>
  <div class="text-center">
    <Navbar />
    <Header :age="calculatedAge" />
    <AboutMe :age="calculatedAge" />
    <Jobs />
    <ContactMe />
    <Footer :year='new Date().getFullYear()' />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Jobs from './components/Jobs.vue'
import ContactMe from './components/ContactMe.vue'
import Footer from './components/Footer.vue'

const calculatedAge = computed(() => {
  return new Date().getFullYear() - 2004;
});
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>