import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KBCraft | 空白创艺",
  description: "ACGO,KBCraft,空白创艺",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前往内测', link: 'https://mc.163.com' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '前往内测', link: 'mc.163.com' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: {
        svg: '<svg t="1711181047249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4253" width="200" height="200"><path d="M800 224h-51.2l44.8-44.8c19.2-19.2 19.2-57.6 0-76.8s-57.6-19.2-76.8 0l-128 121.6h-153.6l-128-121.6c-19.2-19.2-57.6-19.2-76.8 0s-19.2 57.6 0 76.8L275.2 224H224c-89.6 0-160 70.4-160 160v345.6c0 96 70.4 166.4 160 166.4h569.6c89.6 0 160-70.4 160-160V384c6.4-89.6-64-160-153.6-160z m44.8 505.6c0 32-25.6 57.6-57.6 57.6H230.4c-32 0-57.6-25.6-57.6-57.6V390.4c0-32 25.6-57.6 57.6-57.6h556.8c32 0 57.6 25.6 57.6 57.6v339.2zM345.6 448c-32 0-57.6 25.6-57.6 57.6v57.6c0 32 25.6 57.6 57.6 57.6s57.6-25.6 57.6-57.6v-57.6c0-32-25.6-57.6-57.6-57.6z m332.8 0c-32 0-57.6 25.6-57.6 57.6v57.6c0 32 25.6 57.6 57.6 57.6s57.6-25.6 57.6-57.6v-57.6c0-32-25.6-57.6-57.6-57.6z" p-id="4254"></path></svg>'
      }, 
      link: 'https://space.bilibili.com/3537115419773393' }
    ],
    footer:{
      copyright:"Copyright © 2024 KBCraft | 空白创艺"
    }
  }
})

//base: "/KBCraft/"
