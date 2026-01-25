<script setup lang="ts">
import type { Hero } from '~/types/hero'
import type { ButtonProps } from '#ui/types'

const { data } = await useAsyncData('home-hero', () => queryCollection('content').path('/hero').first())

const hero = computed<Hero | null>(() => {
  const meta = data.value?.meta
  if (!meta) return null

  return {
    title: data.value?.title as string,
    director: meta.director as string,
    description: data.value?.description as string,
    backgroundImage: meta.backgroundImage as string,
    links:
      (meta.links as Array<{
        label: string
        to: string
        trailingIcon?: string
        size?: string
      }>) || []
  }
})

const heroLinks = computed<ButtonProps[]>(() =>
  (hero.value?.links ?? []).map((link) => ({
    ...link,
    size: link.size as ButtonProps['size']
  }))
)
</script>

<template>
  <UPageHero v-if="hero" class="relative h-screen" :ui="{ wrapper: 'relative' }">
    <template #top>
      <!-- Background image -->
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${hero.backgroundImage})` }" />

      <!-- Global soft darkening -->
      <div class="absolute inset-0 bg-black/30" />
    </template>
    <template #default>
      <div class="absolute inset-0 z-10 flex items-center justify-center px-4 overflow-y-auto">
        <div
          class="w-full max-w-3xl max-h-[90svh] overflow-y-auto rounded-2xl bg-black/40 backdrop-blur-md px-6 py-8 md:px-10 md:py-12 text-center text-white shadow-2xl animate-fade-in"
        >
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {{ hero.title }}
          </h1>

          <p class="mt-4 text-base md:text-lg opacity-90">
            {{ hero.description }}
          </p>

          <p v-if="hero.director" class="mt-2 text-sm opacity-75">Dirigida por {{ hero.director }}</p>

          <div class="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <UButton v-for="(link, i) in heroLinks" :key="i" v-bind="link" color="primary" :size="link.size" class="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </template>
  </UPageHero>
</template>
