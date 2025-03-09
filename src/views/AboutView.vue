<script lang="ts" setup>
import { useAlertStore } from '@/stores/alert.ts'
const store = useAlertStore()
</script>

<template>
  <div class="about">
    {{ store.type }}
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="scss" scoped></style>
