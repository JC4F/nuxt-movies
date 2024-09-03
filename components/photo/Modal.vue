<script setup lang="ts">
import { ChevronLeft, ChevronRight, X } from "lucide-vue-next";
import type { Image } from "~/types";

const images = ref<Image[] | null>(null);
const index = ref(0);

const current = computed(() => images.value?.[index.value]);

provideImageModal((img, idx) => {
  images.value = img;
  index.value = idx;
});

function prev() {
  if (!images.value?.length) return;
  index.value = (index.value - 1 + images.value.length) % images.value.length;
}

function next() {
  if (!images.value?.length) return;
  index.value = (index.value + 1) % images.value.length;
}

useEventListener("keydown", (e) => {
  if (!images.value) return;
  if (e.key === "Escape") images.value = null;
  else if (e.key === "ArrowLeft") prev();
  else if (e.key === "ArrowRight") next();
});
</script>

<template>
  <div
    v-if="images && current"
    class="fixed inset-0 z-10 flex items-center justify-center bg-foreground p-[1.25]"
  >
    <button
      type="button"
      class="absolute right-1 top-1 z-50 rounded-full bg-foreground p-[0.75] text-3xl opacity-50 transition-all hover:opacity-100"
      @click="images = null"
    >
      <X class="size-4" />
    </button>
    <NuxtImg
      :key="current.file_path"
      format="webp"
      :src="`/tmdb${current.file_path}`"
      aria-hidden="true"
      class="max-h-full max-w-full object-contain"
    />
    <div class="absolute left-0 top-1/2 -translate-y-1/2">
      <button
        type="button"
        class="bg-foreground px-1 py-2.5 opacity-10 hover:opacity-100"
        @click="prev()"
      >
        <ChevronLeft class="size-8 text-background" />
      </button>
    </div>
    <div class="absolute right-0 top-1/2 -translate-y-1/2">
      <button
        type="button"
        class="bg-foreground px-1 py-2.5 opacity-10 hover:opacity-100"
        @click="next()"
      >
      <ChevronRight class="size-8 text-background" />
      </button>
    </div>
    <div class="absolute inset-x-0 bottom-2 items-center">
      <div class="bg-foreground px-1 py-0.5">{{ index + 1 }} / {{ images.length }}</div>
    </div>
  </div>
</template>
