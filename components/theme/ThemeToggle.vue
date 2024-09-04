<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();

const handleToggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <Button
    aria-label="Toggle dark mode"
    :variant="'ghost'"
    :size="'icon'"
    @click="handleToggleTheme"
  >
    <Moon v-if="colorMode.preference === 'light'" class="size-6" />
    <Sun v-if="colorMode.preference === 'dark'" class="size-6" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
