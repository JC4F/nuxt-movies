import { pagesToAuthen, publicPages } from "~/constants/route";

export default defineNuxtRouteMiddleware((to) => {
  const { status } = useAuth();

  // Return immediately if user is already authenticated
  if (status.value === "authenticated") {
    if (pagesToAuthen.includes(to.path)) {
      return navigateTo("/");
    }
    return;
  }

  // haven't authenticated yet
  if (publicPages.concat(pagesToAuthen).includes(to.path)) return;

  /**
   * We cannot directly call and/or return `signIn` here as `signIn` uses async composables under the hood, leading to "nuxt instance undefined errors", see https://github.com/nuxt/framework/issues/5740#issuecomment-1229197529
   *
   * So to avoid calling it, we return it immediately.
   */
  return navigateTo("/auth");
});
