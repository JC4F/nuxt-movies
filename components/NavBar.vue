<script setup lang="ts">
import { Film, Home, Search, Tv } from "lucide-vue-next";
</script>

<template>
  <div
    class="flex flex-row items-center justify-evenly border-t bg-foreground py-[5px] lg:flex-col lg:border-r lg:px-[5px]"
  >
    <NuxtLink v-slot="{ isActive }" to="/" :title="$t('Home')">
      <Home :class="{ 'size-6': true, 'text-background': isActive }" />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/movie" :title="$t('Movies')">
      <Film :class="{ 'size-6': true, 'text-background': isActive }" />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/tv" :title="$t('TV Shows')">
      <Tv :class="{ 'size-6': true, 'text-background': isActive }" />
    </NuxtLink>
    <NuxtLink v-slot="{ isActive }" to="/search" :title="$t('Search')">
      <Search :class="{ 'size-6': true, 'text-background': isActive }" />
    </NuxtLink>
  </div>
</template>
