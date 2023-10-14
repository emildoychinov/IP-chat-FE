import { s as C, n as m } from "../chunks/scheduler.e108d1fd.js";
import {
  S as y,
  i as j,
  g as h,
  s as x,
  h as p,
  y as u,
  c as _,
  k,
  a as l,
  f as i,
} from "../chunks/index.a21d6cee.js";
function b(d) {
  let e,
    f = "Welcome to SvelteKit",
    o,
    a,
    v =
      'Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',
    r,
    s,
    c = "About my site";
  return {
    c() {
      (e = h("h1")),
        (e.textContent = f),
        (o = x()),
        (a = h("p")),
        (a.innerHTML = v),
        (r = x()),
        (s = h("a")),
        (s.textContent = c),
        this.h();
    },
    l(t) {
      (e = p(t, "H1", { "data-svelte-h": !0 })),
        u(e) !== "svelte-yyjjjs" && (e.textContent = f),
        (o = _(t)),
        (a = p(t, "P", { "data-svelte-h": !0 })),
        u(a) !== "svelte-jl9sbz" && (a.innerHTML = v),
        (r = _(t)),
        (s = p(t, "A", { href: !0, "data-svelte-h": !0 })),
        u(s) !== "svelte-15mdupk" && (s.textContent = c),
        this.h();
    },
    h() {
      k(s, "href", "/about");
    },
    m(t, n) {
      l(t, e, n), l(t, o, n), l(t, a, n), l(t, r, n), l(t, s, n);
    },
    p: m,
    i: m,
    o: m,
    d(t) {
      t && (i(e), i(o), i(a), i(r), i(s));
    },
  };
}
class A extends y {
  constructor(e) {
    super(), j(this, e, null, b, C, {});
  }
}
export { A as component };
