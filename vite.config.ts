import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-mentor-age-calculator-app/',
  plugins: [vue()],
})
