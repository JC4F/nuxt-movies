<script setup lang="ts">
import type { Media } from "~/types";
import { formatTime } from "~/composables/utils";

const props = withDefaults(
  defineProps<{
    item: Media;
  }>(),
  {
    item: () => ({}) as Media,
  },
);

const trailer = computed(() => getTrailer(props.item));

const showModal = useIframeModal();
function playTrailer() {
  if (trailer.value) showModal(trailer.value);
}

const mounted = useMounted();
</script>

<template>
  <div
    :key="item.id"
    class="relative aspect-[3/2] bg-foreground lg:aspect-[25/9]"
  >
    <div
      class="absolute inset-x-0 top-0 lg:bottom-0 lg:left-1/3"
    >
      <NuxtImg
        width="1220"
        height="659"
        format="webp"
        :src="`/tmdb${props.item.backdrop_path}`"
        :alt="props.item.title || props.item.name"
        class="size-full object-cover"
      />
    </div>
    <div
      absolute
      bottom-0
      left-0
      top-0
      px-2.5
      flex="~ col"
      justify-center
      lt-lg="bg-gradient-to-t right-0 p-2.5"
      lg="px25 w-2/3 bg-gradient-to-r"
      from-black
      via-black
      to-transparent
    >
      <Transition appear name="hero">
        <div v-show="mounted">
          <h1 mt-2 text-4xl lg:text-5xl line-clamp-2>
            {{ props.item.title || props.item.name }}
          </h1>
          <div flex="~ row wrap" gap-2 items-center mt4>
            <StarsRate w-25 :value="props.item.vote_average" />
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
            <span v-if="props.item.release_date" opacity-50>·</span>
            <div v-if="props.item.release_date" opacity-50>
              {{ props.item.release_date.slice(0, 4) }}
            </div>
            <span v-if="props.item.runtime" opacity-50>·</span>
            <div v-if="props.item.runtime" opacity-50>
              {{ formatTime(props.item.runtime) }}
            </div>
          </div>
          <p
            class="op80 mt-2 line-clamp-3 overflow-hidden text-xs leading-relaxed md:line-clamp-5 md:text-base"
          >
            {{ props.item.overview }}
          </p>
          <div v-if="trailer" class="py5 display-none lg:block">
            <button
              type="button"
              flex="~ gap-2"
              items-center
              p="x6 y3"
              bg="gray/15 hover:gray/20"
              transition
              :title="$t('Watch Trailer')"
              @click="playTrailer()"
            >
              <div i-ph-play />
              {{ $t("Watch Trailer") }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div
      v-if="trailer"
      lg:hidden
      absolute
      left-0
      top-0
      right-0
      h="2/3"
      items-center
      justify-center
    >
      <button
        type="button"
        items-center
        p-2.5
        text-5xl
        opacity-20
        hover:op80
        transition
        :title="$t('Watch Trailer')"
        @click="playTrailer()"
      >
        <div i-ph-play-circle-light />
      </button>
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
