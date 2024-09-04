<script setup lang="ts">
import { onKeyDown } from "@vueuse/core";
import { X } from "lucide-vue-next";

const src = ref<string | null>(null);

function showModal(link: string) {
  src.value = link;
}
const el = ref<HTMLIFrameElement>();

provideIframeModal(showModal);

onKeyDown("Escape", () => {
  if (src.value) src.value = null;
});

onClickOutside(el, () => {
  src.value = null;
});
</script>

<template>
  <div v-if="src" class="fixed inset-0 z-10 flex">
    <Button variant="outline" title="Close" @click="src = null">
      <X class="size-8" />
    </Button>
    <iframe
      ref="el"
      allow="autoplay; encrypted-media"
      allowfullscreen
      :src="src"
      class="m-5 w-full border-none lg:m-20"
    />
  </div>
</template>
