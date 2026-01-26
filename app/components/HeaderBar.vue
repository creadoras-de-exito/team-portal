<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 40)

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'HOGAR', to: '/' },
    { label: 'RECONOCIMIENTOS', to: '/recognitions' },
    { label: 'NOTICIAS', to: '/news' },
    { label: 'SOBRE', to: '/about' },
    { label: 'CONTACTO', to: '/contact' }
  ]
])
</script>

<template>
  <UHeader
    :class="[
      'transition-all duration-300 shadow-sm h-[var(--header-height)]',
      isScrolled ? 'h-16 bg-surface/90 shadow-md backdrop-blur' : 'h-24 bg-surface/90'
    ]"
    :style="{ '--header-height': isScrolled ? '4rem' : '6rem' }"
  >
    <template #left>
      <NuxtLink to="/">
        <!-- <AppLogo class="w-auto h-6 shrink-0" /> -->
        <!-- <PureBioHealthLogo class="w-auto h-15 pr-20" /> -->
      </NuxtLink>
    </template>
    <UNavigationMenu
      :items="items"
      variant="link"
      class="h hover:text-accent hidden md:flex"
      :ui="{
        list: 'gap-8',
        link: `
          relative
          text-lg font-medium
          after:absolute after:left-0 after:-bottom-1
          after:h-px after:w-0 after:bg-[color:var(--color-accent)]
          after:transition-all after:duration-300
          hover:after:w-full
        `
      }"
      color="info"
    />
    <template #right>
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" variant="link" orientation="vertical" class="space-y-2" color="info" />
    </template>
  </UHeader>
</template>
