<script setup lang="ts">
import type { Person } from "~/types";

const props = withDefaults(
  defineProps<{
    item: Person;
  }>(),
  {
    item: () => ({}) as Person,
  },
);
</script>

<template>
  <div class="flex flex-col gap-[1.25] px-4">
    <PersonCreditsList
      v-if="props.item.combined_credits?.cast?.length"
      :title="$t('Acting Credits')"
      :items="props.item.combined_credits.cast"
    />
    <PersonCreditsList
      v-if="props.item.combined_credits?.crew?.length"
      :title="$t('Production Credits')"
      :items="props.item.combined_credits.crew"
    />
  </div>
</template>
