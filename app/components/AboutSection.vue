<script setup lang="ts">
const displayImage = ref(false)
</script>

<template>
  <UPageSection>
    <div class="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 items-center">
      <!-- Text -->
      <div class="space-y-6">
        <h2 class="text-2xl font-medium">Why this space exists</h2>

        <p class="text-gray-600">
          This is a community for people who want to grow — personally, professionally, and as human beings — without losing their values, their
          faith, or themselves in the process.
        </p>

        <ul class="space-y-3 text-gray-600">
          <li>• Growth that feels aligned, not forced</li>
          <li>• Leadership rooted in integrity and service</li>
          <li>• Community over comparison</li>
          <li>• Faith lived through action, not pressure</li>
          <li>• Building a meaningful life, not just results</li>
        </ul>
      </div>

      <div class="flex justify-center">
        <img
          v-if="displayImage"
          src="#"
          alt="Portrait"
          class="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-xl shadow-lg max-w-full max-h-full"
        />
        <div
          v-else
          class="mx-auto w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center text-9xl"
        >
          <span class="text-gray-400">👤</span>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
