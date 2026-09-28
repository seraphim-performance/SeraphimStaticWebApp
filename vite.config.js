import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Azure Static Web Apps deploys this folder (see .github/workflows).
    outDir: 'dist',
  },
})
