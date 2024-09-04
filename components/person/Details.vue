<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{
  item: Person;
}>();

const tab = ref<"known" | "credits" | "photos">("known");
</script>

<template>
  <PersonInfo :item="item" />
  <div class="flex items-center justify-center gap-8 py-6">
    <button
      :class="{
        'border-b-2 border-transparent p-3 text-xl uppercase tracking-wide opacity-20 transition': true,
        '!border-b !opacity-100': tab === 'known',
      }"
      @click="tab = 'known'"
    >
      {{ $t("Known For") }}
    </button>
    <button
      :class="{
        'border-b-2 border-transparent p-3 text-xl uppercase tracking-wide opacity-20 transition': true,
        '!border-b !opacity-100': tab === 'credits',
      }"
      @click="tab = 'credits'"
    >
      {{ $t("Credits") }}
    </button>
    <button
      :class="{
        'border-b-2 border-transparent p-3 text-xl uppercase tracking-wide opacity-20 transition': true,
        '!border-b !opacity-100': tab === 'photos',
      }"
      @click="tab = 'photos'"
    >
      {{ $t("Person Photos") }}
    </button>
  </div>
  <MediaGrid v-if="tab === 'known'">
    <template v-for="i of item.combined_credits?.cast" :key="i.id">
      <MediaCard v-if="i.release_date" :item="i" type="movie" />
    </template>
  </MediaGrid>
  <PersonCredits v-if="tab === 'credits'" :item="item" />
  <PersonPhotos v-if="tab === 'photos'" :item="item" />
</template>
