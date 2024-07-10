import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's Github Page",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/echarts/common-charts" },
      { text: "Games", link: "/games/number-guessing-game" },
    ],

    sidebar: {
      "/examples/": [
        {
          text: "Echarts",
          items: [
            { text: "Common Charts", link: "/examples/echarts/common-charts" },
          ],
        },
        {
          text: "D3",
          items: [
            { text: "Bar Chart", link: "/examples/d3/bar-chart" },
          ],
        },
        {
          text: "Plot",
          items: [
            { text: "Bar Chart", link: "/examples/plot/bar-chart" },
          ],
        },
      ],
      "/games/": [
        {
          text: "Games",
          items: [
            {
              text: "Number Guessing Game",
              link: "/games/number-guessing-game",
            },
            { text: "Tic-Tac-Toe", link: "/games/tic-tac-toe" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/jsx3323" }],
  },
});
