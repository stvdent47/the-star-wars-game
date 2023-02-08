import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import * as path from 'path'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  resolve: {
    alias: {
      api: path.join(__dirname, './src/api'),
      components: path.join(__dirname, './src/components'),
      constants: path.join(__dirname, './src/constants'),
      core: path.join(__dirname, './src/core'),
      hoc: path.join(__dirname, './src/hoc'),
      hooks: path.join(__dirname, './src/hooks'),
      pages: path.join(__dirname, './src/pages'),
    },
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react()],
})
