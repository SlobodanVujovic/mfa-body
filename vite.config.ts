import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteBody',
      filename: 'remoteBody.js',
      exposes: {
        './RemoteBody1': './src/Body1.tsx',
        './RemoteBody2': './src/Body2.tsx',
        './RemoteTsWebBody': './src/WebBody.ts',
        // Not working because there are 2 React instances in 1 app.
        // './RemoteTsWebBodyWithReact': './src/WebBodyWithReact.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  preview: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
