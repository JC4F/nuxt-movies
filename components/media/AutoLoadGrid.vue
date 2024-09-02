<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import type { Media, MediaType } from '~/types'

const props = withDefaults(
  defineProps<{
    items: Media[]
    type: MediaType
    fetch: (page: number) => Promise<void>
    count?: number
    blocking?: boolean
  }>(),
  {
    blocking: true,
  },
)

const tailEl = ref<HTMLDivElement>()

let page = 0
const isLoading = ref(false)

async function loadingNext() {
  if (isLoading.value)
    return
  isLoading.value = true
  try {
    page += 1
    await props.fetch(page)
  }
  finally {
    isLoading.value = false
  }
}

if (import.meta.server || props.blocking)
  await loadingNext()
else
  loadingNext()

if (import.meta.client) {
  useIntervalFn(() => {
    if (!tailEl.value || isLoading.value)
      return
    if (props.count != null && props.items?.length >= props.count)
      return
    const { top } = tailEl.value.getBoundingClientRect()
    const delta = top - window.innerHeight
    if (delta < 400)
      loadingNext()
  }, 500)
}
</script>

<template>
  <div>
    <h1 class="flex gap-2 px-2 pt-2 text-3xl">
      <slot />
    </h1>
    <div v-if="count != null" class="px-2 opacity-50">
      {{ $t('{count} items', { count }) }}
    </div>
    <MediaGrid>
      <MediaCard
        v-for="item of items"
        :key="item.id"
        :type="type"
        :item="item"
      />
    </MediaGrid>
    <div ref="tailEl" />
    <Loader2 v-if="isLoading" class="mx-auto size-4 animate-spin p-2.5" />
  </div>
</template>
