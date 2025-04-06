<script lang="ts" setup>
import { useAlertStore } from '@/stores/alert.ts'
const alertStore = useAlertStore()

const closeAlertBox = () => {
  alertStore.closeAlert()
}
</script>

<template>
  <section
    @click="closeAlertBox"
    id="alert"
    :class="[alertStore.type, { show: alertStore.showAlert }]"
  >
    <i class="fa fa-warning"></i>
    <p v-html="alertStore.message"></p>
  </section>
</template>

<style lang="scss" scoped>
section#alert {
  display: none;
  z-index: 9999;
  opacity: 0;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem 1rem;
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px #000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &.warning {
    color: orangered;
  }
  &.success {
    color: green;
  }
  &.error {
    color: red;
  }
  &.show {
    display: flex;
    opacity: 1;
  }
  &:hover {
    background: #eee;
  }
}
</style>
