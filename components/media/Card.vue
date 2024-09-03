<script setup lang="ts">
import { FileQuestion } from "lucide-vue-next";
import type { Media, MediaType } from "~/types";

defineProps<{
  type: MediaType;
  item: Media;
}>();
</script>

<template>
  <NuxtLink :to="`/${item.media_type || type}/${item.id}`" pb-0.5>
    <div
      class="block aspect-[10/16] bg-secondary p-[0.25] transition duration-500 hover:z-10 hover:scale-105"
    >
      <NuxtImg
        v-if="item.poster_path"
        width="400"
        height="600"
        format="webp"
        :src="`/tmdb${item.poster_path}`"
        :alt="item.title || item.name"
        class="size-full object-cover"
        :style="{ 'view-transition-name': `item-${item.id}` }"
      />
      <div v-else class="flex h-full opacity-10">
        <FileQuestion class="size-4" />
      </div>
    </div>
    <div class="mt-2">
      {{ item.title || item.name }}
    </div>
    <div class="flex items-center gap-2 text-sm">
      <StarsRate class="w-5" :value="item.vote_average" />
      <div class="opacity-60">
        {{ formatVote(item.vote_average) }}
      </div>
    </div>
  </NuxtLink>
</template>
