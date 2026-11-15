import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({base:'/SBau-/',plugins:[react(),VitePWA({registerType:'autoUpdate',manifest:{name:'SBauAkte',short_name:'SBauAkte',description:'Digitale Bauakte',theme_color:'#152a42',background_color:'#f5f7fa',display:'standalone',start_url:'./',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,woff2}']}})]});
