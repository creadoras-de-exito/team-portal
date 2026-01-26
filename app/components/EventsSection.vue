<script setup lang="ts">
import type { Event } from '~/types/event'

const { data } = await useAsyncData('home-events', () => queryCollection('content').path('/components/events-section').first())

const events = computed<Event[]>(() => {
  const events = data.value?.meta.events
  if (!events || !Array.isArray(events)) return []

  return events.map((event) => ({
    ...event,
    location: event.location || '',
    date: event.date || ''
  }))
})

const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString()
}
</script>

<template>
  <!-- EVENTS SECTION -->
  <UPageSection class="py-16 px-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="event in events" :key="event.id" class="border-l-4 border-blue-500 pl-4">
        <h3 class="text-xl font-semibold mb-1">{{ event.name }}</h3>
        <p class="text-gray-700 mb-1">{{ formatDate(event.date) }}</p>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </UPageSection>
</template>
