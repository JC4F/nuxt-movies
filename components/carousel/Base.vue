<template>
  <div class="mt-5 flex items-center px-10 py-3">
    <div class="text-2xl">
      <slot name="title" />
    </div>
    <div class="flex-auto" />
    <slot name="more" />
  </div>
  <div class="relative">
    <div class="overflow-y-auto">
      <div class="flex w-full gap-2 p-2 px-10">
        <slot />
      </div>
    </div>
  </div>
</template>
