import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  // State
  const type = ref('warning')
  const message = ref('message content')
  const showAlert = ref(false)
  // Getters
  const show = computed(() => showAlert.value)
  // Actions
  function showAlertMessage(typeString: string, messageString: string) {
    type.value = typeString
    message.value = messageString
    showAlert.value = true
  }

  return { type, message, show, showAlertMessage }
})
