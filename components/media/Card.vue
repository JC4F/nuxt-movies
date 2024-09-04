<script setup lang="ts">
import { FileQuestion } from "lucide-vue-next";
import type { Media, MediaType } from "~/types";

const props = defineProps<{
  type: MediaType;
  item: Media;
}>();

const { $localSe } = useNuxtApp();
const { isLoadingImage, completeLoadingImage } = useImageLoader();

const viewTransitionName = ref("");
const localMovieId = $localSe.getItem("movieId");

// id type number
if (localMovieId === props.item.id.toString()) {
  viewTransitionName.value = `item-${props.item.id}`;
}

const handleClick = () => {
  viewTransitionName.value = `item-${props.item.id}`;
  $localSe.setItem("movieId", props.item.id);
};
</script>

<template>
  <NuxtLink
    :to="`/${item.media_type || type}/${item.id}`"
    class="pb-2"
    @click="handleClick"
  >
    <div
      class="relative aspect-[10/16] overflow-hidden rounded bg-transparent p-px transition duration-500 hover:z-10 hover:scale-105"
    >
      <Skeleton
        :class="{
          'absolute inset-0 rounded': true,
          'opacity-0': !isLoadingImage,
        }"
      />
      <NuxtImg
        v-if="item.poster_path"
        width="400"
        height="600"
        format="webp"
        loading="lazy"
        :src="`/tmdb${item.poster_path}`"
        :alt="item.title || item.name"
        :class="{
          'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
          '!opacity-100': !isLoadingImage,
        }"
        :style="{ 'view-transition-name': viewTransitionName }"
        @load="completeLoadingImage"
      />

      <div v-else class="flex h-full opacity-10">
        <FileQuestion class="size-4" />
      </div>
    </div>
    <div class="mt-2">
      {{ item.title || item.name }}
    </div>
    <div class="flex items-center gap-2 text-sm">
      <StarsRate class="w-20" :value="item.vote_average" />
      <div class="opacity-60">
        {{ formatVote(item.vote_average) }}
      </div>
    </div>
  </NuxtLink>
</template>
