import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { remarkCodeHike } from '@code-hike/mdx';

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');

  return {
    plugins: [
      react(),
      mdx.default({
        remarkPlugins: [[remarkCodeHike, { theme: 'material-palenight' }]],
      }),
    ],
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    server: {
      open: true, // automatically open app in browser on server start
      port: 4000, // change port number
    },
  };
});
