<script setup lang="ts">
import type { Media, MediaType } from '~/types'

defineProps<{
  type: MediaType
  items: Media[]
}>()
</script>

<template>
  <CarouselBase>
    <MediaCard
      v-for="i of items"
      :key="i.id"
      :item="i"
      :type="type"
      class="w-10 flex-1 md:w-[240px]"
    />
  </CarouselBase>
</template>
