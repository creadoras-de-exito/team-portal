<script setup>
const { data: home } = await useAsyncData(() => queryCollection('content').path('/hero/').first())
</script>

<template>
  <main v-if="home">
    <HeroSection />
    <AboutSection />
  </main>
</template>
