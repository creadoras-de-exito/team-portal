<template>
  <div class="min-h-screen flex flex-col">
    <HeaderBar />

    <UMain class="flex-1 min-h-[calc(100vh-var(--header-height))]">
      <NuxtPage />
    </UMain>

    <FooterBar />
  </div>
</template>
