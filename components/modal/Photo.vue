<script setup lang="ts">
import type { Image, ModalState } from "~/types";

const { isLoadingImage, completeLoadingImage } = useImageLoader();
const photoModalState = useState<ModalState<Image[]>>(
  "photoModalState",
  () => ({
    isOpen: false,
    index: 0,
    data: [],
  }),
);
</script>

<template>
  <Dialog v-model:open="photoModalState.isOpen">
    <DialogContent
      class="h-[60vh] w-screen max-w-none p-9 md:h-[80vh] md:w-[80vw]"
    >
      <Swiper
        class="w-[calc(100vw-74px)] !overflow-y-visible md:w-[calc(80vw-74px)]"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :initial-slide="photoModalState.index"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
      >
        <SwiperSlide
          v-for="slide in photoModalState.data"
          :key="slide.iso_639_1"
        >
          <div class="relative size-full">
            <Skeleton
              :class="{
                'absolute inset-0 rounded': true,
                'opacity-0': !isLoadingImage,
              }"
            />
            <NuxtImg
              :key="slide.file_path"
              format="webp"
              :src="`/tmdb${slide.file_path}`"
              aria-hidden="true"
              :class="{
                'absolute inset-0 size-full object-cover opacity-0 transition-all duration-500': true,
                '!opacity-100': !isLoadingImage,
              }"
              @load="completeLoadingImage"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </DialogContent>
  </Dialog>
</template>
