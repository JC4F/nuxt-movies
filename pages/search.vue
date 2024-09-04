<script setup lang="ts">
import { Search } from "lucide-vue-next";
import type { Media } from "~/types";

definePageMeta({
  pageTransition: false,
});

const route = useRoute();
const router = useRouter();
const input = ref((route.query.s || "").toString());
const error = ref<unknown>();
const count = ref<undefined | number>();

const items = ref<Media[]>([]);
const currentSearch = ref(input.value);

function search() {
  if (currentSearch.value === input.value) return;

  currentSearch.value = input.value.toString();
  count.value = undefined;
  items.value = [];
  router.replace({ query: { s: input.value } });
}

async function fetch(page: number) {
  if (!currentSearch.value) return;
  try {
    const data = await searchShows(currentSearch.value, page);
    count.value = data.total_results ?? count.value;
    items.value.push(...data.results);
  } catch (e: unknown) {
    error.value = e;
  }
}

const throttledSearch = useDebounceFn(search, 200);

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
};

useHead({
  title: computed(() => `Search: ${currentSearch.value}`),
});

watch(
  () => input.value,
  () => throttledSearch(),
);
</script>

<template>
  <div>
    <div class="sticky flex items-center gap-3 px-6 py-4">
      <Search class="size-6" />
      <input
        v-model="input"
        v-focus
        type="text"
        class="w-full bg-transparent text-2xl outline-none"
        :placeholder="$t('Type to search...')"
        @keyup.enter="search"
      >
    </div>
    <div v-if="error" class="flex flex-col items-start gap-3 p-2">
      <h1 class="text-4xl text-destructive">
        {{ $t("Error occurred on fetching") }}
      </h1>
      <pre class="py-0.5">{{ error }}</pre>
      <Button @click="error = undefined">
        {{ $t("Retry") }}
      </Button>
    </div>
    <MediaAutoLoadGrid
      v-else-if="currentSearch"
      :key="currentSearch"
      :fetch="fetch"
      :items="items"
      :count="count"
      :blocking="false"
      type="movie"
    >
      <div>
        {{ $t("Search result for: {currentSearch}", { currentSearch }) }}
      </div>
    </MediaAutoLoadGrid>
    <div v-else class="p-10 text-center text-4xl opacity-50">
      {{ $t("Type something to search...") }}
    </div>
  </div>
</template>
