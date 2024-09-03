<script setup lang="ts">
import type { Media, MediaType } from '~/types'

defineProps<{
  type: MediaType
  items: Media[]
}>()
</script>

<template>
  <CarouselBase>
    <SwiperSlide v-for="i of items" :key="i.id">
      <MediaCard :item="i" :type="type" />
    </SwiperSlide>
  </CarouselBase>
</template>
