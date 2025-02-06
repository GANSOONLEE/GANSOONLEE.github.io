<script lang="ts" setup>
import { useAlertStore } from '@/stores/alert.ts'
const store = useAlertStore()
</script>

<template>
  <div class="about">
    {{ store }}
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
