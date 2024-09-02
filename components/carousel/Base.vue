<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const scrollEl = ref<HTMLDivElement>();

function scrollLeft() {
  scrollEl.value?.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth",
  });
}

function scrollRight() {
  scrollEl.value?.scrollBy({
    left: window.innerWidth,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="mt-[1.25] flex items-center px-2.5 py-[0.75]">
    <div class="text-2xl">
      <slot name="title" />
    </div>
    <div class="flex-auto" />
    <slot name="more" />
  </div>
  <div relative>
    <div ref="scrollEl" class="overflow-y-auto">
      <div class="flex w-max gap-2 p-2 px-2.5">
        <slot />
      </div>
    </div>
    <button
      type="button"
      class="absolute inset-y-0 left-0 flex flex-col items-center justify-center p-[0.75] opacity-0 transition-all hover:opacity-100"
      title="Scroll left"
      @click="scrollLeft()"
    >
      <ChevronLeft class="size-4" />
    </button>
    <button
      type="button"
      class="absolute inset-y-0 right-0 flex flex-col items-center justify-center p-[0.75] opacity-0 transition-all hover:opacity-100"
      title="Scroll right"
      @click="scrollRight()"
    >
      <ChevronRight class="size-4" />
    </button>
  </div>
</template>
