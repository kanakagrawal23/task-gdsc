import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/task-gdsc/',
  plugins: [react()],
  build: {
    outDir: 'dist',
},});


