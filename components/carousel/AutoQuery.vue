<script setup lang="ts">
import type { QueryItem } from "~/types";

const props = defineProps<{
  query: QueryItem;
}>();

const item = await listMedia(props.query.type, props.query.query, 1);
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ $t(query.title) }}
    </template>
    <template #more>
      <NuxtLink
        :to="`/${props.query.type}/category/${props.query.query}`"
        class="opacity-50 transition-all hover:opacity-100"
      >
        {{ $t("Explore more") }}
      </NuxtLink>
    </template>
    <SwiperSlide v-for="i of item?.results || []" :key="i.id">
      <MediaCard :item="i" :type="props.query.type" />
    </SwiperSlide>
  </CarouselBase>
</template>
