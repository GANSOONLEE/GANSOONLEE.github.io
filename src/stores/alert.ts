import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  // State
  const type = ref('warning')
  const message = ref('message content')
  const showAlert = ref(false)
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  // Getters
  const show = computed(() => showAlert.value)
  // Actions
  function showAlertMessage(typeString: string, messageString: string, duration: number = 5) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    type.value = typeString
    message.value = messageString
    showAlert.value = true

    timeoutId = setTimeout(() => {
      showAlert.value = false
      timeoutId = null
    }, duration * 1000)
  }

  function closeAlert() {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    showAlert.value = false
  }

  return { type, message, showAlert, show, showAlertMessage, closeAlert }
})
