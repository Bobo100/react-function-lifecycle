import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-function-lifecycle/',
  plugins: [react()],
  server: { port: 3000 },
})
