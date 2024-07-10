import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's Github Page",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/echarts-examples" },
      { text: "Games", link: "/games/number-guessing-game" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "ECharts Examples", link: "/examples/echarts-examples" },
          { text: "D3 Examples", link: "/examples/d3-examples" },
          { text: "Plot Examples", link: "/examples/plot-examples" },
        ],
      },
      {
        text: "Games",
        items: [
          { text: "Number Guessing Game", link: "/games/number-guessing-game"},
          { text: "Tic-Tac-Toe", link: "/games/tic-tac-toe"}
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jsx3323" },
    ],
  },
});
