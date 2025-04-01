import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,

  title: "Aconite Studios",
  description: "Small modding Fabric / Quilt modding studio focused on quality over quantity",
  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wikis', link: '/wikis' }
    ],

    sidebar: [
      {
        text: 'Astray Archipelago',
        items: [
          { text: 'Entering the Archipelago', link: 'astray/entering' },
          { text: 'Progression', link: 'astray/progression' },
          { text: 'Progression', link: 'astray/progression' },
          { text: 'Progression', link: 'astray/progression' },
          { text: 'Progression', link: 'astray/progression' },
          { text: 'Progression', link: 'astray/progression' },
          { text: 'Progression', link: 'astray/progression' }
        ]
      },
      {
        text: 'Carved',
        items: [
          { text: '4.0.0', link: 'carved/4' },
          { text: '3.0.0', link: 'carved/3' },
          { text: '2.0.0', link: 'carved/2' },
          { text: '1.0.0', link: 'carved/1' }
        ]
      },
      {
        text: 'Discharged',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
          { text: 'Celstite', link: '/api-examples' },
          { text: 'Tar', link: '/api-examples' },
          { text: 'Rosel', link: '/api-examples' }
        ]
      },
      {
        text: 'Typlosid',
        items: [
          { text: '???', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thatoneaiguy' },
      { icon: 'discord', link: 'https://discord.gg/DGTDSNfZWC' }
    ]
  }
})
