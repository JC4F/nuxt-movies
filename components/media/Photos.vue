<script setup lang="ts">
import type { Media } from "~/types";

defineProps<{
  item: Media;
}>();

const show = useImageModal();
</script>

<template>
  <div class="flex flex-col gap-1.5 px-1 py-2 md:px-4">
    <div class="flex items-baseline gap-2">
      <div class="text-2xl">
        {{ $t("Backdrops") }}
      </div>
      <div class="text-sm opacity-50">
        {{
          $t("{numberOfImages} Images", {
            numberOfImages: item.images?.backdrops?.length,
          })
        }}
      </div>
    </div>
    <div class="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-1">
      <PhotoCard
        v-for="(i, idx) of item.images?.backdrops"
        :key="i.file_path"
        :item="i"
        class="aspect-[16/9] w-full"
        @click="show(item.images!.backdrops, idx)"
      />
    </div>
    <div class="mt-10 flex items-baseline gap-2">
      <div class="text-2xl">
        {{ $t("Posters") }}
      </div>
      <div class="text-sm opacity-50">
        {{
          $t("{numberOfImages} Images", {
            numberOfImages: item.images?.posters?.length,
          })
        }}
      </div>
    </div>
    <div
      class="grid grid-cols-[minmax(10rem,_1fr)] gap-1 lg:grid-cols-[minmax(15rem,_1fr)]"
    >
      <PhotoCard
        v-for="(i, idx) of item.images?.posters"
        :key="i.file_path"
        :item="i"
        class="aspect-[9/16]"
        @click="show(item.images!.posters, idx)"
      />
    </div>
  </div>
</template>
