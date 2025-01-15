import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      sass: 'sass-embedded',
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to Flask backend
    },
  },
});
