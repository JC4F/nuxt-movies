export default defineNuxtPlugin(() => {
  return {
    provide: {
      localSe: {
        getItem(item: string) {
          if (import.meta.client) {
            return localStorage.getItem(item);
          } else {
            return null;
          }
        },

        setItem(item: string, value: string) {
          if (import.meta.client) {
            return localStorage.setItem(item, value);
          }
        },
      },
    },
  };
});
