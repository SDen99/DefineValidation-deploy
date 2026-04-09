const e=async({event:e,resolve:t})=>{const a=await t(e),s=e.url.pathname;return s.startsWith("/_app/immutable/")?a.headers.set("cache-control","public, max-age=31536000, immutable"):s.match(/\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp)$/)&&a.headers.set("cache-control","public, max-age=3600, stale-while-revalidate=86400"),a};

export { e as handle };
//# sourceMappingURL=hooks.server-DnWNf4I5.js.map
