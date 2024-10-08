<script setup lang="ts">
import type { Media, ModalState } from "~/types";
import { formatTime } from "~/composables/utils";
import { CirclePlay, Play } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    item: Media;
  }>(),
  {
    item: () => ({}) as Media,
  },
);

const trailer = computed(() => getTrailer(props.item));
const trailerModalState = useState<ModalState<string>>("trailerModalState");
// const showModal = useIframeModal();

const playTrailer = () => {
  if (trailer.value) {
    // showModal(trailer.value);
    trailerModalState.value.isOpen = true;
    trailerModalState.value.data = trailer.value;
  }
};

const mounted = useMounted();
</script>

<template>
  <div :key="item.id" class="relative aspect-[3/2] lg:aspect-[25/9]">
    <div class="absolute inset-x-0 top-0 lg:bottom-0 lg:left-1/3">
      <NuxtImg
        width="1220"
        height="659"
        format="webp"
        preload
        :src="`/tmdb${props.item.backdrop_path}`"
        :alt="props.item.title || props.item.name"
        class="size-full object-cover"
      />
    </div>
    <div
      class="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-background via-background to-transparent p-10 lg:w-2/3 lg:bg-gradient-to-r lg:px-24"
    >
      <Transition appear name="hero">
        <div v-show="mounted">
          <h1 class="mt-2 line-clamp-2 text-4xl lg:text-5xl">
            {{ props.item.title || props.item.name }}
          </h1>
          <div class="mt-4 flex items-center gap-2">
            <StarsRate class="w-24" :value="props.item.vote_average" />
            <div class="hidden opacity-50 md:block">
              {{ formatVote(props.item.vote_average) }}
            </div>
            <span class="hidden opacity-50 md:block">·</span>
            <div class="hidden opacity-50 md:block">
              {{
                $t("{numberOfReviews} Reviews", {
                  numberOfReviews: formatVote(props.item.vote_count),
                })
              }}
            </div>
            <span v-if="props.item.release_date" class="opacity-50">·</span>
            <div v-if="props.item.release_date" class="opacity-50">
              {{ props.item.release_date.slice(0, 4) }}
            </div>
            <span v-if="props.item.runtime" class="opacity-50">·</span>
            <div v-if="props.item.runtime" class="opacity-50">
              {{ formatTime(props.item.runtime) }}
            </div>
          </div>
          <p
            class="mt-2 line-clamp-3 overflow-hidden text-xs leading-relaxed opacity-80 md:line-clamp-5 md:text-base"
          >
            {{ props.item.overview }}
          </p>
          <div v-if="trailer" class="hidden py-5 lg:block">
            <Button
              variant="ghost"
              :title="$t('Watch Trailer')"
              @click.stop.prevent="playTrailer()"
            >
              <Play class="size-4" />
              {{ $t("Watch Trailer") }}
            </Button>
          </div>
        </div>
      </Transition>
    </div>
    <div
      v-if="trailer"
      class="absolute inset-x-0 h-2/3 items-center justify-center lg:hidden"
    >
      <Button
        variant="ghost"
        :title="$t('Watch Trailer')"
        @click.stop.prevent="playTrailer()"
      >
        <CirclePlay class="size-4" />
      </Button>
    </div>
  </div>
</template>

<style>
.hero-enter-active,
.hero-leave-active {
  transition:
    transform 0.75s cubic-bezier(0.4, 0.25, 0.3, 1),
    opacity 0.3s cubic-bezier(0.4, 0.25, 0.3, 1);
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
}

.hero-enter-to,
.hero-leave-from {
  opacity: 1;
  transform: translateZ(0);
}
</style>
