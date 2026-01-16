<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="text-center py-12 px-4 bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
    <p class="text-lg text-gray-700 mb-6">{{ subtitle }}</p>
    <slot />
  </section>
</template>
