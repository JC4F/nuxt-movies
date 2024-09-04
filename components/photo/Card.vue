<script setup lang="ts">
import type { Image } from "~/types";

const props = defineProps<{
  item: Image;
}>();

const { isLoadingImage, completeLoadingImage } = useImageLoader();
</script>

<template>
  <button
    class="relative bg-transparent text-left transition duration-500 hover:z-10 hover:scale-[1.02]"
    title="View photo"
  >
    <Skeleton
      :class="{
        'absolute inset-0 rounded': true,
        'opacity-0': !isLoadingImage,
      }"
    />
    <NuxtImg
      width="400"
      height="600"
      format="webp"
      loading="lazy"
      :src="`/tmdb${props.item.file_path}`"
      alt="Photo"
      :class="{
        'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
        '!opacity-100': !isLoadingImage,
      }"
      @load="completeLoadingImage"
    />
  </button>
</template>
