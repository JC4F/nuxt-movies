<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{
  item: Person
}>()
</script>

<template>
  <NuxtLink :to="`/person/${item.id}`">
    <div
      block bg-secondary p-[0.25]
      class="aspect-[10/16]"
      transition duration-400
      hover="scale-105 z10"
    >
      <NuxtImg
        v-if="item.profile_path"
        width="500"
        height="800"
        format="webp"
        :src="`/tmdb${item.profile_path}`"
        :alt="item.name"
        w-full h-full object-cover
      />
      <div v-else h-full opacity-10>
        <div i-ph:user ma text-4xl />
      </div>
    </div>
    <div mt-2>
      {{ item.name }}
    </div>
    <div opacity-50>
      {{ item.character || item.known_for_department }}
    </div>
  </NuxtLink>
</template>
