<script setup>
// import { createClient } from "@supabase/supabase-js";

// const config = useRuntimeConfig();
// const supabase = createClient(
//   config.public.supabaseUrl,
//   config.public.supabasePublishableKey
// );

// const { data: instruments } = await useAsyncData("instruments", async () => {
//   const { data, error } = await supabase.from("instruments").select();
//   if (error) {
//     console.error("Error fetching instruments:", error);
//     return [];
//   }
//   return data;
// });

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Travis Nickels' },
    { name: 'robots', content: 'index, follows' }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: `favicon.ico` }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Creadoras de Éxito'
const description = 'Portal oficial del equipo Creadoras de Éxito, con actualizaciones, recursos y anuncios.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '',

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ''
})
</script>

<template>
  <UApp>
    <HeaderBar />

    <NuxtPage />
  </UApp>
  <!-- <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul> -->
</template>
