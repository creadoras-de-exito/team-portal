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
</script>

<template>
  <NuxtPage />
  <!-- <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul> -->
</template>
