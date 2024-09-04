// composables/useImageLoader.ts
import { ref } from "vue";

export function useImageLoader() {
  const isLoadingImage = ref(true);

  const completeLoadingImage = () => {
    isLoadingImage.value = false;
  };

  return {
    isLoadingImage,
    completeLoadingImage,
  };
}
