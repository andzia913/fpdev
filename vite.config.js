import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  buiold: {
    outDir: 'build',
  },
  plugins: [react()],
    build: { target: "es2022" },
    optimizeDeps: {
      esbuildOptions: { target: "es2022", supported: { await: true } },
    
  }
}));
