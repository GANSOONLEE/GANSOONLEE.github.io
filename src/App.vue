<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from '@/components/NavbarItem.vue'
import FooterItem from '@/components/FooterItem.vue'
</script>

<template>
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
  position: sticky;
  top: 0;
}
main {
  padding: 2rem;
}
</style>
