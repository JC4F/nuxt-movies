<script setup lang="ts">
import { Film, Home, Search, Tv } from "lucide-vue-next";
import { pagesToAuthen } from "~/constants/route";

const route = useRoute();
const showNav = ref(true);

watch(
  () => route.path,
  () => {
    if (pagesToAuthen.includes(route.path)) showNav.value = false;
    else showNav.value = true;
  },
);
</script>

<template>
  <div
    v-if="showNav"
    class="flex flex-row items-center justify-evenly border-b border-border bg-background/80 py-3 lg:flex-col lg:border-b-0 lg:border-r lg:px-3"
  >
    <Button variant="ghost" :size="'icon'" as-child>
      <NuxtLink v-slot="{ isActive }" to="/" :title="$t('Home')">
        <Home :class="{ 'size-6': true, 'fill-primary': isActive }" />
      </NuxtLink>
    </Button>
    <Button variant="ghost" :size="'icon'" as-child>
      <NuxtLink v-slot="{ isActive }" to="/movie" :title="$t('Movies')">
        <Film :class="{ 'size-6': true, 'fill-primary': isActive }" />
      </NuxtLink>
    </Button>
    <Button variant="ghost" :size="'icon'" as-child>
      <NuxtLink v-slot="{ isActive }" to="/tv" :title="$t('TV Shows')">
        <Tv :class="{ 'size-6': true, 'fill-primary': isActive }" />
      </NuxtLink>
    </Button>
    <Button variant="ghost" :size="'icon'" as-child>
      <NuxtLink v-slot="{ isActive }" to="/search" :title="$t('Search')">
        <Search :class="{ 'size-6': true, 'fill-primary': isActive }" />
      </NuxtLink>
    </Button>

    <ThemeToggle />
  </div>
  <div v-else />
</template>
