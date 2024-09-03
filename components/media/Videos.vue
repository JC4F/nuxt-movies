<script setup lang="ts">
import type { Media } from "~/types";

defineProps<{
  item: Media;
}>();
</script>

<template>
  <div class="flex flex-col gap-1.5 p-1 md:px-[3.5]">
    <div class="opacity-50">
      {{
        $t("{numberOfVideos} Videos", {
          numberOfVideos: item.videos?.results?.length || 0,
        })
      }}
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-1">
      <VideoCard v-for="i of item.videos?.results" :key="i.id" :item="i" />
    </div>
  </div>
</template>
