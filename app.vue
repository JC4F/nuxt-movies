<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "Nuxt Movies",
  titleTemplate: (title) =>
    title !== "Nuxt Movies" ? `${title} · Nuxt Movies` : title,
  meta: [
    {
      name: "description",
      content:
        "A TMDB client built with Nuxt Image to show the potential of it ✨",
    },
    {
      property: "og:image",
      content: "https://nuxt-movies-mu.vercel.app/social-card.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@nuxt_js" },
    { name: "twitter:creator", content: "@nuxt_js" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/webp",
      href: "/movies.webp",
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator />
  <div
    class="grid size-full grid-rows-[1fr_max-content] overflow-hidden transition-none lg:grid-cols-[max-content_1fr]"
  >
    <div
      id="app-scroller"
      class="relative max-h-[calc(100vh-65px)] overflow-y-auto overflow-x-hidden lg:max-h-none"
    >
      <NuxtPage />
    </div>
    <NavBar class="-order-1" />
    <IframeModal />
    <PhotoModal />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: hsl(var(--background));
}
</style>
