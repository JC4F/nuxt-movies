<template>
  <div class="mt-5 flex items-center px-10 py-3">
    <div class="text-2xl">
      <slot name="title" />
    </div>
    <div class="flex-auto" />
    <slot name="more" />
  </div>
  <div class="relative w-full gap-2 overflow-hidden p-2 px-10">
    <ClientOnly>
      <Swiper
        class="max-w-full !overflow-y-visible"
        :slides-per-view="1"
        :space-between="8"
        :modules="[SwiperAutoplay]"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 4,
          },
          '1024': {
            slidesPerView: 7,
          },
        }"
      >
        <slot />
      </Swiper>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <Skeleton class="h-[300px] w-full rounded-xl" />
      </template>
    </ClientOnly>
  </div>
</template>
