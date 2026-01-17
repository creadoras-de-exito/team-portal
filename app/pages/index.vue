<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>

<template>
  <main v-if="home">
    <h1 class="text-4xl font-semibold tracking-tight">{{ home.meta.heroTitle }}</h1>
    <p>{{ home.meta.heroSubtitle }}</p>

    <img v-if="home.meta.heroImage" :src="home.meta.heroImage" alt="Hero image" style="max-width: 100%" />
    <div class="p-4">
      <UButton color="primary">It works</UButton>
    </div>
  </main>
</template>
