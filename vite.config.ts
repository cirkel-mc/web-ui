import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'klikoo-web-uikit',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    tsconfigPaths(),
    react(),
    dts({ rollupTypes: true }),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
