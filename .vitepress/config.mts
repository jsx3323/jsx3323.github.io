import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's Github Page",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/echarts-examples" },
      { text: "Games", link: "/number-guessing-game" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "ECharts Examples", link: "/echarts-examples" },
          { text: "D3 Examples", link: "/d3-examples" },
        ],
      },
      {
        text: "Games",
        items: [
          { text: "Number Guessing Game", link: "/number-guessing-game"}
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jsx3323" },
    ],
  },
});
