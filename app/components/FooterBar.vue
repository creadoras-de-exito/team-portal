<script setup lang="ts"></script>

<template>
  <UFooter class="shadow-sm h-24 mt-10">
    <template #left>
      <p class="text-sm text-muted">&copy; {{ new Date().getFullYear() }} Creadoras de Éxito. Todos los derechos reservados.</p>
    </template>
    <template #right>
      <UButton to="https://www.linkedin.com" target="_blank" icon="i-simple-icons-linkedin" aria-label="LinkedIn" color="neutral" variant="ghost" />
      <UButton to="https://x.com" target="_blank" icon="i-simple-icons-x" aria-label="X" color="neutral" variant="ghost" />
      <UButton to="https://www.facebook.com" target="_blank" icon="i-simple-icons-facebook" aria-label="Facebook" color="neutral" variant="ghost" />
      <UButton
        to="https://www.instagram.com"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Instagram"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
