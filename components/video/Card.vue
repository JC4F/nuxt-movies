<script setup lang="ts">
import { Play } from "lucide-vue-next";
import type { Video } from "~/types";

const props = defineProps<{
  item: Video;
}>();

const showModal = useIframeModal();
const { isLoadingImage, completeLoadingImage } = useImageLoader();

function play() {
  return showModal(getVideoLink(props.item)!);
}
</script>

<template>
  <button class="pb-2 text-left" @click="play()">
    <div
      class="relative flex aspect-[16/9] bg-transparent p-1 transition duration-500 hover:z-10 hover:scale-[1.02]"
    >
      <Skeleton
        :class="{
          'absolute inset-0 rounded': true,
          'opacity-0': !isLoadingImage,
        }"
      />
      <NuxtImg
        :src="`/youtube/vi/${item.key}/maxresdefault.jpg`"
        width="400"
        height="600"
        format="webp"
        loading="lazy"
        :alt="props.item.name"
        :class="{
          'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
          '!opacity-100': !isLoadingImage,
        }"
        @load="completeLoadingImage"
      />
      <div
        class="absolute inset-0 flex size-full opacity-20 transition hover:opacity-100"
      >
        <Play class="m-auto size-8" />
      </div>
    </div>
    <div class="mt-2">
      {{ props.item.name }}
    </div>
    <div class="text-sm opacity-60">
      {{ props.item.type }}
    </div>
  </button>
</template>
