<script setup lang="ts">
import type {  ModalState } from "~/types";

const trailerModalState = useState<ModalState<string>>(
  "trailerModalState",
  () => ({
    isOpen: false,
    data: '',
  }),
);
</script>

<template>
  <Dialog v-model:open="trailerModalState.isOpen">
    <DialogContent
      class="h-[60vh] w-screen max-w-none p-9 md:h-[80vh] md:w-[80vw]"
    >
      <iframe
        ref="el"
        allow="autoplay; encrypted-media"
        allowfullscreen
        :src="trailerModalState.data"
        class="m-5 w-full border-none lg:m-20"
      />
    </DialogContent>
  </Dialog>
</template>
