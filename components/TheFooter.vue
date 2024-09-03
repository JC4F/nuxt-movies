<template>
  <footer class="flex flex-col gap-4 p-14">
    <div class="my-2 flex items-center gap-2">
      <img src="/movies-sm.webp" width="25" height="25" alt="Logo" >
      <div class="text-xl">Nuxt Movies</div>
    </div>
    <div class="flex items-center gap-2">
      <div class="text-sm opacity-50">Made with</div>
      <a href="https://nuxt.com/" target="_blank" title="Nuxt 3">
        <IconNuxt3 class="h-5" />
      </a>
    </div>
    <div class="flex items-center gap-2">
      <p class="text-sm text-secondary">
        Data provided by&nbsp;
        <a
          opacity-100
          target="_blank"
          href="https://www.themoviedb.org/"
          title="The Movie Database"
          rel="noopener"
          class="opacity-50 transition-all hover:opacity-100"
        >
          <IconTMDB class="inline h-4" />
        </a>
      </p>
    </div>
    <div class="flex items-center gap-2">
      <p class="text-sm text-secondary">
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
    <div class="flex items-center gap-1">
      <ExternalLinks
        :links="{
          twitter_id: 'nuxt_js',
          github_id: 'nuxt/movies',
        }"
      >
        <a
          href="https://vercel.com"
          rel="noopener"
          target="_blank"
          aria-label="go to vercel"
        >
          <IconVercel alt="Vercel" />
        </a>
      </ExternalLinks>

      <LanguageSwitcher />
    </div>
  </footer>
</template>
