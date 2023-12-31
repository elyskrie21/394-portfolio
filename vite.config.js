/** @type {import('vite').UserConfig} */
import { resolve } from 'path'
export default {
  //absolute path
  base: '/394-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        essay: resolve(__dirname, 'pages/essay.html'),
        works: resolve(__dirname, 'pages/works.html'),
      },
    },
  }
};
