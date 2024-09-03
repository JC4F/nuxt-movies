<script setup lang="ts">
import { User } from "lucide-vue-next";
import type { Person } from "~/types";

defineProps<{
  item: Person;
}>();
</script>

<template>
  <NuxtLink :to="`/person/${item.id}`">
    <div
      class="aspect-[10/16] bg-secondary p-[0.25] transition duration-500 hover:z-10 hover:scale-105"
    >
      <NuxtImg
        v-if="item.profile_path"
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${item.profile_path}`"
        :alt="item.name"
        class="size-full object-cover"
      />
      <div v-else class="h-full opacity-10">
        <User class="size-4" />
      </div>
    </div>
    <div class="mt-2">
      {{ item.name }}
    </div>
    <div class="opacity-50">
      {{ item.character || item.known_for_department }}
    </div>
  </NuxtLink>
</template>
