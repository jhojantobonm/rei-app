import { defineConfig as defineConfigVite,mergeConfig} from 'vite'
import { defineConfig as defineConfigVitest} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const viteConfig =  defineConfigVite({
  plugins: [react(),tailwindcss(),],
});

const vitestConfig =  defineConfigVitest({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  },
});

export default mergeConfig(viteConfig,vitestConfig);
