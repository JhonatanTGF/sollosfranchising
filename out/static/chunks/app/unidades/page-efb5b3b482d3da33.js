(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [128, 307, 367],
  {
    9528: (e, t, c) => {
      Promise.resolve().then(c.bind(c, 3243)),
        Promise.resolve().then(c.bind(c, 5424));
    },
    3243: (e, t, c) => {
      "use strict";
      c.d(t, { default: () => r });
      var a = c(2860),
        n = c(4612),
        i = c.n(n);
      function r(e) {
        let {
            children: t,
            href: c,
            variant: n = "primary",
            onClick: r,
            className: l = "",
          } = e,
          s = ""
            .concat(
              "px-6 py-3 rounded-none uppercase font-bold tracking-wider hover:bg-opacity-90 transition-all",
              " "
            )
            .concat(
              {
                primary: "bg-black text-white",
                accent: "bg-[#446EEC] text-black",
              }[n],
              " "
            )
            .concat(l);
        return c
          ? (0, a.jsx)(i(), { href: c, className: s, children: t })
          : (0, a.jsx)("button", {
              onClick: r,
              className: s,
              children: t,
            });
      }
    },
    5424: (e, t, c) => {
      "use strict";
      c.d(t, { default: () => n });
      var a = c(2860);
      function n(e) {
        let {
          children: t,
          className: c = "",
          bgColor: n = "white",
        } = e;
        return (0, a.jsx)("section", {
          className: "section "
            .concat(
              {
                white: "bg-white text-black",
                black: "bg-black text-white",
                accent: "bg-[#446EEC] text-black",
                light: "bg-[#F5F5F5] text-black",
              }[n],
              " "
            )
            .concat(c),
          children: (0, a.jsx)("div", {
            className: "container mx-auto px-4",
            children: t,
          }),
        });
      }
      c(3200);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [612, 685, 411, 358], () => t(9528)), (_N_E = e.O());
  },
]);
