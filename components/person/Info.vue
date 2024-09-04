<script setup lang="ts">
import type { Person } from "~/types";
import { formatDate } from "~/composables/utils";

const props = defineProps<{
  item: Person;
}>();

const { isLoadingImage, completeLoadingImage } = useImageLoader();

const externalIds = computed(() => ({
  ...props.item.external_ids,
  homepage: props.item.homepage,
}));
</script>

<template>
  <div
    class="mx-auto grid max-w-[1200px] items-center gap-8 p-4 md:grid-cols-[max-content_1fr]"
  >
    <div
      class="relative mx-auto mt-5 block aspect-[3/4] w-72 self-start border-4 border-secondary object-cover transition-all duration-500"
    >
      <Skeleton
        :class="{
          'absolute inset-0 rounded': true,
          'opacity-0': !isLoadingImage,
        }"
      />
      <NuxtImg
        v-if="props.item.profile_path"
        width="400"
        height="600"
        format="webp"
        loading="lazy"
        :src="`/tmdb${props.item.profile_path}`"
        :alt="props.item.name"
        :class="{
          'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
          '!opacity-100': !isLoadingImage,
        }"
        @load="completeLoadingImage"
      />
    </div>
    <div class="gap-8 p-4">
      <div>
        <h2 class="mb-4 text-3xl">
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
