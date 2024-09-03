<script setup lang="ts">
import type { Image } from "~/types";

const props = defineProps<{
  item: Image;
}>();
</script>

<template>
  <button
    class="relative bg-secondary text-left transition duration-500 hover:z-10 hover:scale-[1.02]"
    title="View photo"
  >
    <NuxtImg
      width="400"
      height="600"
      format="webp"
      :src="`/tmdb${props.item.file_path}`"
      alt="Photo"
      class="size-full object-cover"
    />
  </button>
</template>
