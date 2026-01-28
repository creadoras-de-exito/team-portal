<script setup lang="ts">
defineProps<{
  selectedPath: 'explore' | 'community' | 'build' | 'gifts' | null
}>()

const ctaCopy = {
  explore: 'Create a quiet space to explore',
  community: 'Create a space to connect',
  build: 'Create a space to grow something meaningful',
  gifts: 'Create a space inspired by creativity'
}
</script>

<template>
  <UPageSection>
    <div class="max-w-md mx-auto text-center space-y-6">
      <p class="text-lg">There’s no rush to decide anything.</p>

      <NuxtLink to="/welcome" class="inline-block text-base font-medium underline underline-offset-4">
        {{ selectedPath ? ctaCopy[selectedPath] : 'Create a space for yourself' }}
      </NuxtLink>

      <p class="text-sm text-gray-500">You can always change direction later.</p>
    </div>
  </UPageSection>
</template>
