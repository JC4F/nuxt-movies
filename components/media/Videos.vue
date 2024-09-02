<script setup lang="ts">
import type { Media } from '~/types'

defineProps<{
  item: Media
}>()
</script>

<template>
  <div flex="~ col" px-1 md:px14 py4 gap6>
    <div opacity-50>
      {{ $t('{numberOfVideos} Videos', { numberOfVideos: item.videos?.results?.length || 0 }) }}
    </div>
    <div grid="~ cols-minmax-20rem" gap-1>
      <VideoCard v-for="i of item.videos?.results" :key="i.id" :item="i" />
    </div>
  </div>
</template>
