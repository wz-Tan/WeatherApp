import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    port: 1000,
    proxy:{
      "/weatherapi":{
        target:"https://api.openweathermap.org",
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/weatherapi/,"/data/2.5/weather"), //format is target/rewrite
      },
    },
  },
})
