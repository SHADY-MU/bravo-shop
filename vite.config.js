import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bravo-shop/', // 👈 اكتب هنا اسم الريبو بتاعك
})
