<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const heroImage = ref('/images/luxury-02.png')
</script>

<template>
  <main v-if="home">
    <UPageHero
      :title="home.meta.heroTitle"
      :description="home.meta.heroSubtitle"
      :links="[
        {
          label: '',
          to: '/',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl'
        }
      ]"
      class="relative min-h-[70vh]"
      :ui="{ wrapper: 'relative' }"
    >
      <template #top>
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }" />
        <div
          class="absolute inset-0 bg-linear-to-b from-[color-mix(in_oklab,var(--ui-bg)_1%,transparent)] via-[color-mix(in_oklab,var(--ui-bg)_75%,transparent)] to-[color-mix(in_oklab,var(--ui-bg)_1%,transparent)]"
        />
      </template>
    </UPageHero>
    <div class="p-4">
      <UButton color="primary">It works</UButton>
    </div>
  </main>
</template>
