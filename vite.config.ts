import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],

    base:
      command === 'serve'
        ? '/'
        : env.VITE_BASE_PATH || '/',

    server: {
      host: true,
      allowedHosts: true,
      port: 3000,
    },
    esbuild: {
      sourcemap: false,
    },
    build: {
      sourcemap: false,
    }
  }
})