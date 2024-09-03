<script setup>
const props = defineProps({
  error: Object,
});

const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404"),
);
const isDev = import.meta.dev;

function handleError() {
  return clearError({ redirect: "/" });
}
</script>

<template>
  <NuxtLayout>
    <div
      class="flex h-screen flex-col items-center justify-center gap-1 text-center"
    >
      <div text-3xl>
        {{ is404 ? "This page could not be found" : "An error occurred" }}
      </div>
      <div class="text-xl opacity-50">
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </div>
      <pre v-if="isDev">{{ error }}</pre>
      <button
        class="rounded border px-1 py-px opacity-50 transition-all hover:opacity-100"
        @click="handleError"
      >
        Go Back
      </button>
    </div>
  </NuxtLayout>
</template>
