<script setup lang="ts">
import { RouterView } from 'vue-router'
import AlertBox from '@/components/AlertBox.vue'
import NavbarItem from '@/components/NavbarItem.vue'
import FooterItem from '@/components/FooterItem.vue'
</script>

<template>
  <AlertBox />
  <header>
    <div class="wrapper">
      <NavbarItem />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <FooterItem />
</template>

<style lang="scss" scoped>
header {
  z-index: 1000;
  position: sticky;
  top: 0;
}
main {
  padding: 2rem;
}
</style>
