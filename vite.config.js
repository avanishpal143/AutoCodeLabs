import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Raise warning limit so we see real issues
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy vendor libs into separate cached chunks
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'email': ['emailjs-com'],
        },
      },
    },
  },
})
