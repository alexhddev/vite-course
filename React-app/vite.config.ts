import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { WatermarkPlugin } from './plugins/WatermarkPlugin'
import Inspect from 'vite-plugin-inspect'


function manualChunks(id: any){
  if (id.includes("node_modules")) {
    return "vendor"
  } 
  return "main"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    Inspect(),
    WatermarkPlugin({
      color: 'red',
      text: 'test stage'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})
