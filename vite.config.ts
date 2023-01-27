import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), reactSvgPlugin()],
  server: {
    watch: {
      usePolling: true
    }
  }
});
