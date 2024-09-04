declare module "#app" {
  interface NuxtApp {
    $localSe: {
      getItem(item: string): string | null;
      setItem(item: string, value: string): void;
    };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $localSe: {
      getItem(item: string): string | null;
      setItem(item: string, value: string): void;
    };
  }
}

export {};
