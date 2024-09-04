<script setup lang="ts">
import type { Media, MediaType } from "~/types";
import {
  formatDate,
  formatLang,
  formatTime,
  numberWithCommas,
} from "~/composables/utils";

const props = withDefaults(
  defineProps<{
    item: Media;
    type: MediaType;
  }>(),
  {
    item: () => ({}) as Media,
    type: "movie",
  },
);

const { isLoadingImage, completeLoadingImage } = useImageLoader();

const externalIds = computed(() => ({
  ...props.item.external_ids,
  homepage: props.item.homepage,
}));
const directors = computed(() =>
  props.item.credits?.crew.filter((person) => person.job === "Director"),
);
</script>

<template>
  <div
    class="mx-auto grid max-w-[1200px] grid-cols-[max-content_1fr] items-center gap-8 p-4"
  >
    <div
      class="relative hidden aspect-[10/16] w-[320px] border border-secondary md:block"
    >
      <Skeleton
        :class="{
          'absolute inset-0 rounded': true,
          'opacity-0': !isLoadingImage,
        }"
      />
      <NuxtImg
        width="400"
        height="600"
        format="webp"
        :src="`/tmdb${props.item.poster_path}`"
        :alt="props.item.title || props.item.name"
        :class="{
          'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
          '!opacity-100': !isLoadingImage,
        }"
        :style="{ 'view-transition-name': `item-${props.item.id}` }"
        @load="completeLoadingImage"
      />
    </div>

    <div class="flex w-[calc(100%-2rem)] flex-col gap-6 md:p-4">
      <div v-if="props.item.overview">
        <h2 class="mb-4 text-3xl">
          {{ $t("Storyline") }}
        </h2>
        <div class="opacity-80" v-text="props.item.overview" />
      </div>

      <div class="text-sm opacity-80">
        <ul
          class="grid grid-cols-[max-content_1fr] items-center gap-3 lg:grid-cols-[max-content_1fr_max-content_1fr]"
        >
          <template v-if="props.item.release_date">
            <div>
              {{ $t("Release Date") }}
            </div>
            <div>
              {{ formatDate(props.item.release_date) }}
            </div>
          </template>
          <template v-if="props.item.runtime">
            <div>
              {{ $t("Runtime") }}
            </div>

            <div>
              {{ formatTime(props.item.runtime) }}
            </div>
          </template>
          <template v-if="directors?.length">
            <div>
              {{ $t("Director") }}
            </div>

            <div class="flex flex-row flex-wrap gap-px">
              <NuxtLink
                v-for="person of directors"
                :key="person.id"
                :to="`/person/${person.id}`"
                class="rounded bg-accent px-0.5 py-px text-xs hover:opacity-90"
              >
                {{ person.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="props.item.budget">
            <div>
              {{ $t("Budget") }}
            </div>

            <div>${{ numberWithCommas(props.item.budget) }}</div>
          </template>
          <template v-if="props.item.revenue">
            <div>
              {{ $t("Revenue") }}
            </div>

            <div>${{ numberWithCommas(props.item.revenue) }}</div>
          </template>
          <template v-if="props.item?.genres?.length">
            <div>
              {{ $t("Genre") }}
            </div>

            <div class="flex flex-row flex-wrap gap-px">
              <NuxtLink
                v-for="genre of props.item.genres"
                :key="genre.id"
                :to="`/genre/${genre.id}/${type}`"
                class="rounded bg-accent px-0.5 py-px text-xs hover:opacity-90"
              >
                {{ genre.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="props.item.status">
            <div>
              {{ $t("Status") }}
            </div>

            <div>
              {{ props.item.status }}
            </div>
          </template>
          <template v-if="props.item.original_language">
            <div>
              {{ $t("Language") }}
            </div>

            <div>
              {{ formatLang(props.item.original_language) }}
            </div>
          </template>
          <template v-if="props.item?.production_companies?.length">
            <div>
              {{ $t("Production") }}
            </div>

            <div>
              {{
                props.item.production_companies.map((i) => i.name).join(", ")
              }}
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
