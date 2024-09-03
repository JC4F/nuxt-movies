<script setup lang="ts">
import type { Media } from "~/types";

const props = defineProps<{
  items: Media[];
  title: string;
}>();

const credits = [...props.items].sort((a, b) =>
  (b.release_date || b.first_air_date || "9999").localeCompare(
    a.release_date || a.first_air_date || "9999",
  ),
);
</script>

<template>
  <div class="flex flex-col gap-[0.25]">
    <h2 class="pb-1 text-2xl">
      {{ title }}
    </h2>
    <NuxtLink
      v-for="i of credits"
      :key="i.id"
      :to="`/${i.media_type}/${i.id}`"
      class="flex flex-col gap-2 bg-secondary px-0.5 py-[0.75]"
    >
      <div class="w-5 text-center">
        {{
          i.release_date
            ? i.release_date.slice(0, 4)
            : i.first_air_date
              ? i.first_air_date.slice(0, 4)
              : "-"
        }}
      </div>
      <div>{{ i.title || i.name }}</div>
      <div class="opacity-50">
        {{
          i.character ? $t("as {character}", { character: i.character }) : ""
        }}
      </div>
    </NuxtLink>
  </div>
</template>
