import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'


function manualChunks(id: string){
  if (id.includes("node_modules")) {
    return "vendor"
  } 
  return "main"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    Inspect(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})
