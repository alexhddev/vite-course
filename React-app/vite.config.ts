import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { WatermarkPlugin } from './plugins/WatermarkPlugin'


function manualChunks(id: any){
  if (id.includes("node_modules")) {
    return "vendor"
  } 
  return "main"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    WatermarkPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})
