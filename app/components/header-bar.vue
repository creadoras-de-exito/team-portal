<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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
  <UHeader class="fixed top-0 left-0 right-0 z-50 shadow-sm h-24">
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
