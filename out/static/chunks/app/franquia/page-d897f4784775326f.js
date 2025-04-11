(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [552],
  {
    3805: (e, t, c) => {
      Promise.resolve().then(c.bind(c, 3243)),
        Promise.resolve().then(c.bind(c, 4269)),
        Promise.resolve().then(c.bind(c, 5424));
    },
    3243: (e, t, c) => {
      "use strict";
      c.d(t, { default: () => l });
      var a = c(2860),
        n = c(4612),
        s = c.n(n);
      function l(e) {
        let {
            children: t,
            href: c,
            variant: n = "primary",
            onClick: l,
            className: r = "",
          } = e,
          i = ""
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
            .concat(r);
        return c
          ? (0, a.jsx)(s(), { href: c, className: i, children: t })
          : (0, a.jsx)("button", {
              onClick: l,
              className: i,
              children: t,
            });
      }
    },
    4269: (e, t, c) => {
      "use strict";
      c.d(t, { default: () => s });
      var a = c(2860);
      c(3200);
      var n = c(1084);
      function s(e) {
        let {
          title: t,
          description: c,
          imagePlaceholder: s = "Imagem",
          imageUrl: l,
          className: r = "",
        } = e;
        return (0, a.jsxs)("div", {
          className: "card ".concat(r),
          children: [
            (0, a.jsx)("div", {
              className:
                "bg-gray-200 h-48 mb-4 flex items-center justify-center",
              children: l
                ? (0, a.jsx)(n.default, {
                    src: l,
                    alt: t,
                    width: 400,
                    height: 200,
                    className: "w-full h-full object-cover",
                  })
                : (0, a.jsx)("p", {
                    className: "font-bold",
                    children: s,
                  }),
            }),
            (0, a.jsx)("h3", {
              className: "text-xl font-bold mb-2",
              children: t,
            }),
            (0, a.jsx)("p", { children: c }),
          ],
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
    e.O(0, [612, 84, 685, 411, 358], () => t(3805)), (_N_E = e.O());
  },
]);
