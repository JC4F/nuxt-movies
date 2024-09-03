<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{
  item: Person;
}>();
</script>

<template>
  <div class="flex flex-col gap-6 px-16">
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
      class="grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-4 lg:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]"
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
