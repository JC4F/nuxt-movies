import { createIPX, createIPXH3Handler, ipxHttpStorage } from "ipx";
import { lazyEventHandler, useBase } from "h3";

export default lazyEventHandler(() => {
  const ipx = createIPX({
    maxAge: 3600,
    alias: {
      "/tmdb": "https://image.tmdb.org/t/p/original/",
      "/youtube": "https://img.youtube.com/",
      "/self": `${process.env.NUXT_BASE_URL}/`,
    },
    storage: ipxHttpStorage({
      domains: ["image.tmdb.org", "img.youtube.com", process.env.NUXT_BASE_URL!],
    }),
  });

  return useBase("/ipx", createIPXH3Handler(ipx));
});
