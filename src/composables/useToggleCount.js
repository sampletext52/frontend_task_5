import { ref, computed, watchEffect } from 'vue'

export function useToggleCount(baseValue) {
  const baseCount = computed(() => baseValue.value || 0)
  const count = ref(0)
  const isActive = ref(false)

  watchEffect(() => {
    if (!isActive.value) {
      count.value = baseCount.value
    }
  })

  const toggle = () => {
    if (isActive.value) {
      count.value--
      isActive.value = false
    } else {
      count.value++
      isActive.value = true
    }
  }

  return {
    count,
    isActive,
    toggle,
  }
}

