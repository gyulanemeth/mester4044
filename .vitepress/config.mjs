import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mester4044",
  description: "My awesome apartment",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rooms', link: '/rooms/' },
      { text: 'Location', link: '/location' },
      { text: 'Price', link: '/price' },
      { text: 'Owner', link: '/owner' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Interested? Email me!', link: 'mailto:gyula.nemeth85@gmail.com?subject=Mester4044 apartment'},
          { text: 'Rooms', link: '/rooms/', items: [
            { text: 'Hall', link: '/rooms/hall' },
            { text: 'Living Room', link: '/rooms/living-room' },
            { text: 'Kitchen', link: '/rooms/kitchen' },
            { text: 'Bathroom', link: '/rooms/bathroom' }
          ]},
          { text: 'Location', link: '/location' },
          { text: 'Price', link: '/price' },
          { text: 'Owner', link: '/owner' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/gyulanemeth85' },
      { icon: { svg: '<?xml version="1.0" encoding="iso-8859-1"?><svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.001 330.001" xml:space="preserve"><g id="XMLID_348_"><path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"/><polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/></g></svg>' }, link: 'mailto:gyula.nemeth85@gmail.com?subject=Mester4044 apartment' }
    ],
    footer: {
      copyright: 'If you are interested, please, write an email to <a href="mailto:gyula.nemeth85@gmail.com?subject=Mester4044 apartment">gyula.nemeth85@gmail.com</a>.'
    }
  }
})
