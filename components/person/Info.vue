<script setup lang="ts">
import type { Person } from "~/types";
import { formatDate } from "~/composables/utils";

const props = defineProps<{
  item: Person;
}>();

const externalIds = computed(() => ({
  ...props.item.external_ids,
  homepage: props.item.homepage,
}));
</script>

<template>
  <div
    class="mx-auto grid max-w-[300px] items-center gap-8 p-1 md:grid-cols-[max-content_1fr]"
  >
    <NuxtImg
      v-if="props.item.profile_path"
      width="400"
      height="600"
      format="webp"
      :src="`/tmdb${props.item.profile_path}`"
      :alt="props.item.name"
      class="mx-auto mt-5 block aspect-[3/4] w-[70px] self-start border-4 border-secondary object-cover transition-all duration-500 md:w-[90px]"
    />
    <div class="gap-2 p-1">
      <div>
        <h2 class="mb-1 text-3xl">
          {{ props.item.name }}
        </h2>

        <div
          v-if="props.item.biography"
          class="whitespace-pre-wrap leading-relaxed opacity-80"
          v-text="props.item.biography"
        />
        <div v-else class="italic opacity-50">
          {{ $t("(no biography)") }}
        </div>
      </div>

      <div class="text-sm opacity-80">
        <ul class="grid grid-cols-[max-content_1fr] items-center gap-3">
          <template v-if="props.item.known_for_department">
            <div class="opacity-60">
              {{ $t("Known for") }}
            </div>
            <div>
              {{ props.item.known_for_department }}
            </div>
          </template>
          <template v-if="props.item.place_of_birth">
            <div class="opacity-60">
              {{ $t("Place of birth") }}
            </div>
            <div>
              {{ props.item.place_of_birth }}
            </div>
          </template>

          <template v-if="props.item.birthday">
            <div class="opacity-60">
              {{ $t("Birthday") }}
            </div>
            <div>
              {{ formatDate(props.item.birthday) }}
            </div>
          </template>
        </ul>
      </div>

      <div>
        <ExternalLinks :links="externalIds" />
      </div>
    </div>
  </div>
</template>
