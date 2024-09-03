<script setup lang="ts">
import type { Media, MediaType } from "~/types";

defineProps<{
  item: Media;
  type: MediaType;
}>();
</script>

<template>
  <MediaInfo :item="item" :type="type" />
  <CarouselBase v-if="item.credits?.cast?.length">
    <template #title>
      {{ $t("Cast") }}
    </template>
    <PersonCard
      v-for="i of item.credits?.cast"
      :key="i.id"
      :item="i"
      class="w-[200px] flex-1"
    />
  </CarouselBase>
</template>
