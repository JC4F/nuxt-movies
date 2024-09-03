<script setup lang="ts">
import {
  AtSign,
  Facebook,
  Film,
  Github,
  Home,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-vue-next";
import type { ExternalIds } from "~/types";

const props = defineProps<{
  links: ExternalIds;
}>();

const imdbType = computed(() => {
  if (props.links.imdb_id?.startsWith("nm")) return "name";

  return "title";
});
</script>

<template>
  <div class="mt-5 flex items-center gap-5 text-lg">
    <a
      v-if="links.twitter_id"
      :href="`https://twitter.com/${links.twitter_id}`"
      target="_blank"
      aria-label="Link to Twitter account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Twitter class="size-4" />
    </a>
    <a
      v-if="links.facebook_id"
      :href="`https://www.facebook.com/${links.facebook_id}`"
      target="_blank"
      aria-label="Link to Facebook account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Facebook class="size-4" />
    </a>
    <a
      v-if="links.instagram_id"
      :href="`https://instagram.com/${links.instagram_id}`"
      target="_blank"
      aria-label="Link to Instagram account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Instagram class="size-4" />
    </a>
    <a
      v-if="links.imdb_id"
      :href="`https://www.imdb.com/${imdbType}/${links.imdb_id}`"
      target="_blank"
      aria-label="Link to IMDb account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Film class="size-4" />
    </a>
    <a
      v-if="links.github_id"
      :href="`https://github.com/${links.github_id}`"
      target="_blank"
      aria-label="Link to GitHub account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Github class="size-4" />
    </a>
    <a
      v-if="links.linkedin_id"
      :href="`https://www.linkedin.com/in/${links.linkedin_id}`"
      target="_blank"
      aria-label="Link to LinkedIn account"
      rel="noopener"
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Linkedin class="size-4" />
    </a>
    <a
      v-if="links.email"
      :href="links.email"
      aria-label="Link to Email"
      rel="noopener"
      scale-120
      class="opacity-50 transition-all hover:opacity-100"
    >
      <AtSign class="size-4" />
    </a>
    <a
      v-if="links.homepage"
      :href="links.homepage"
      aria-label="Link to Homepage"
      rel="noopener"
      scale-120
      class="opacity-50 transition-all hover:opacity-100"
    >
      <Home class="size-4" />
    </a>
    <slot />
  </div>
</template>
