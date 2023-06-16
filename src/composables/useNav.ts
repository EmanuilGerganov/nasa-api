import { ref } from 'vue'

export function useNav() {
  const isMenuOpen = ref<boolean>(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => (isMenuOpen.value = false)

  return {
    closeMenu,
    toggleMenu,
    isMenuOpen
  }
}
