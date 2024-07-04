import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jiang's Github Page",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/echarts-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'ECharts Examples', link: '/echarts-examples' },
          { text: 'D3 Examples', link: '/d3-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
