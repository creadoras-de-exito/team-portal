<script setup lang="ts">
import type { Announcement } from '~/types/announcement'

const { data } = await useAsyncData('home-announcements', () => queryCollection('content').path('/components/announcements-section').first())

const announcements = computed<Announcement[]>(() => {
  const announcements = data.value?.meta.announcements
  if (!announcements || !Array.isArray(announcements)) return []

  return announcements.map((announcement) => ({
    ...announcement,
    slug: announcement.slug || '',
    date: announcement.date || ''
  }))
})
</script>

<template>
  <!-- ANNOUNCEMENTS / NEWS SECTION -->
  <section class="py-16 px-6 bg-gray-50">
    <h2 class="text-3xl font-bold mb-8 text-center">Latest Announcements</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(announcement, i) in announcements" :key="i" class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-2">{{ announcement.title }}</h3>
        <p class="mb-2">{{ announcement.summary }}</p>
        <NuxtLink :to="`/news/${announcement.slug}`" class="text-blue-600 hover:underline"> Read More </NuxtLink>
      </div>
    </div>
  </section>
</template>
