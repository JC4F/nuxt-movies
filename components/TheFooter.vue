<template>
  <footer class="flex flex-col gap-1 p-4">
    <div class="my-0.5 flex items-center gap-2">
      <img src="/movies-sm.webp" width="25" height="25" alt="Logo" >
      <div class="text-xl">Nuxt Movies</div>
    </div>
    <div class="flex items-center gap-0.5">
      <div class="text-sm opacity-50">Made with</div>
      <a href="https://nuxt.com/" target="_blank" title="Nuxt 3">
        <IconNuxt3 class="h-[5px]" />
      </a>
    </div>
    <div class="flex items-center gap-0.5">
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
          <IconTMDB class="inline h-1" />
        </a>
      </p>
    </div>
    <div class="flex items-center gap-0.5">
      <p class="text-sm text-secondary">
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
    <div flex gap-1 items-center>
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
