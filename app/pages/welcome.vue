<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const submitting = ref(false)
const success = ref(false)

const selectedPath = useState<'explore' | 'community' | 'build' | 'gifts' | null>('new-here-path')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

const submitForm = async () => {
  if (!selectedPath.value) return

  submitting.value = true
  try {
    const res = await fetch('https://public-api.proud-recipe-b079.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      },
      body: JSON.stringify({
        email: email.value || null,
        path: selectedPath.value
      })
    })

    if (!res.ok) throw new Error(await res.text())
    success.value = true
  } catch (err) {
    console.error(err)
  } finally {
    submitting.value = false
  }
}

const pathMessages = {
  explore: 'You came here curious. That’s more than enough.',
  community: 'Connection grows best when there’s no pressure.',
  build: 'You don’t have to rush what matters.',
  gifts: 'Creativity has a way of opening doors gently.'
}
</script>

<template>
  <UPageSection>
    <div class="max-w-2xl mx-auto space-y-12 rounded-2xl bg-white/60 backdrop-blur p-6 shadow-sm">
      <!-- Core message -->
      <div class="text-center space-y-6">
        <h1 class="text-3xl md:text-4xl font-light tracking-tight">You’re in the right place.</h1>

        <p class="text-gray-600 text-lg">Begin your journey here — explore, connect, and grow at your own pace.</p>
        <p class="text-gray-500">No account needed yet. No pressure. Just a way to move forward.</p>

        <p v-if="selectedPath" class="text-gray-400 italic">
          {{ pathMessages[selectedPath] }}
        </p>
      </div>

      <!-- Divider / pause -->
      <div class="flex justify-center">
        <span class="h-px w-24 bg-gray-200" />
      </div>

      <!-- Invitation -->
      <div class="max-w-md mx-auto text-center space-y-6">
        <p class="text-sm text-gray-600">Receive occasional notes that support your next steps. Thoughtful, not overwhelming.</p>

        <div class="flex gap-2 justify-center">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <button
            :disabled="submitting || success || !selectedPath"
            class="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
            @click="submitForm"
          >
            {{ submitting ? 'Saving...' : 'Let’s Begin' }}
          </button>
        </div>

        <p class="text-xs text-gray-400 text-center mt-1">We respect your space — no sequences, no pressure.</p>
      </div>
    </div>
  </UPageSection>
</template>
