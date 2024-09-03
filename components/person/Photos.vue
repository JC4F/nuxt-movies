<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{
  item: Person;
}>();
</script>

<template>
  <div class="flex flex-col gap-1.5 px-4">
    <div class="mt-10 flex items-baseline gap-2">
      <div class="text-2xl">
        {{ $t("Person Photos") }}
      </div>
      <div class="text-sm opacity-50">
        {{
          $t("{numberOfImages} Images", {
            numberOfImages: item.images?.profiles?.length,
          })
        }}
      </div>
    </div>
    <div
      class="grid grid-cols-[minmax(10rem,_1fr)] gap-1 lg:grid-cols-[minmax(15rem,_1fr)]"
    >
      <PhotoCard
        v-for="i of item.images?.profiles"
        :key="i.file_path"
        :item="i"
        class="aspect-[9/16]"
      />
    </div>
  </div>
</template>
