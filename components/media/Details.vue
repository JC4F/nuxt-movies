<script setup lang="ts">
import type { Media, MediaType } from "~/types";

defineProps<{
  item: Media;
  type: MediaType;
}>();

const tab = ref<"overview" | "videos" | "photos">("overview");
</script>

<template>
  <div class="flex items-center justify-center gap-8 py-6">
    <button
      :class="{
        'border-b-2 border-transparent p-[3px] text-xl uppercase tracking-wide opacity-20 transition': true,
        'border-b opacity-100': tab === 'overview',
      }"
      @click="tab = 'overview'"
    >
      {{ $t("Overview") }}
    </button>
    <button
      :class="{
        'border-b-2 border-transparent p-[3px] text-xl uppercase tracking-wide opacity-20 transition': true,
        'border-b opacity-100': tab === 'videos',
      }"
      @click="tab = 'videos'"
    >
      {{ $t("Videos") }}
    </button>
    <button
      :class="{
        'border-b-2 border-transparent p-[3px] text-xl uppercase tracking-wide opacity-20 transition': true,
        'border-b opacity-100': tab === 'photos',
      }"
      @click="tab = 'photos'"
    >
      {{ $t("Media Photos") }}
    </button>
  </div>
  <MediaOverview v-if="tab === 'overview'" :item="item" :type="type" />
  <MediaVideos v-if="tab === 'videos'" :item="item" />
  <MediaPhotos v-if="tab === 'photos'" :item="item" />
</template>
