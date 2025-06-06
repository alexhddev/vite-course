import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        minify: false
    },
    envPrefix: 'COOL_APP_'
})