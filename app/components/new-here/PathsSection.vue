<script setup lang="ts">
type PathKey = 'explore' | 'community' | 'build' | 'gifts'

const selectedPath = useState<PathKey | null>('new-here-path', () => null)

const selectPath = (key: PathKey) => {
  console.log('Selected:', key)
  selectedPath.value = key
}

const paths = [
  {
    key: 'explore',
    title: "I'm just exploring",
    description: 'I want to see what this space is about.'
  },
  {
    key: 'community',
    title: "I'm craving community",
    description: 'I want connection, encouragement, and shared growth.'
  },
  {
    key: 'build',
    title: 'I want to build something',
    description: 'At my own pace, in a way that feels aligned.'
  },
  {
    key: 'gifts',
    title: 'I love thoughtful gifts & creativity',
    description: 'I enjoy meaningful products and ideas.'
  }
]
</script>

<template>
  <UPageSection>
    <div class="max-w-5xl mx-auto space-y-10">
      <h2 class="text-2xl text-center">You don’t have to fit into one box, this just gives us a place to start.</h2>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li
          v-for="path in paths"
          :key="path.key"
          tabindex="0"
          role="button"
          class="p-6 rounded-xl border transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary hover:shadow-md"
          :class="{
            'border-primary bg-primary/5': selectedPath === path.key,
            'border-gray-200': selectedPath !== path.key
          }"
          @click="selectPath(path.key as PathKey)"
          @keydown.enter="selectPath(path.key as PathKey)"
        >
          <h3 class="text-lg font-medium">{{ path.title }}</h3>
          <p class="text-gray-600 mt-2">{{ path.description }}</p>
        </li>
      </ul>

      <!-- Pass selectedPath downward -->
      <NewHereSoftCTASection :selected-path="selectedPath" />
    </div>
  </UPageSection>
</template>
