export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.b76ca3fc.js",
  "_app/immutable/chunks/scheduler.e108d1fd.js",
  "_app/immutable/chunks/index.a21d6cee.js",
  "_app/immutable/chunks/singletons.b66cc461.js",
];
export const stylesheets = [];
export const fonts = [];
