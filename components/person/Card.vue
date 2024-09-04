<script setup lang="ts">
import { User } from "lucide-vue-next";
import type { Person } from "~/types";

defineProps<{
  item: Person;
}>();

const { isLoadingImage, completeLoadingImage } = useImageLoader();
</script>

<template>
  <NuxtLink :to="`/person/${item.id}`">
    <div
      class="relative aspect-[10/16] bg-transparent p-px transition duration-500 hover:z-10 hover:scale-105"
    >
      <Skeleton
        :class="{
          'absolute inset-0 rounded': true,
          'opacity-0': !isLoadingImage,
        }"
      />
      <NuxtImg
        v-if="item.profile_path"
        width="500"
        height="800"
        format="webp"
        loading="lazy"
        :src="`/tmdb${item.profile_path}`"
        :alt="item.name"
        :class="{
          'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
          '!opacity-100': !isLoadingImage,
        }"
        @load="completeLoadingImage"
      />
      <div v-else class="h-full opacity-10">
        <User class="size-4" />
      </div>
    </div>
    <div class="mt-2">
      {{ item.name }}
    </div>
    <div class="opacity-50">
      {{ item.character || item.known_for_department }}
    </div>
  </NuxtLink>
</template>
