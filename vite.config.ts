import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://vjongraobjnvajvvgvfa.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqb25ncmFvYmpudmFqdnZndmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NDUzMDcsImV4cCI6MjA3NTQyMTMwN30.jzQ38U_d5Zwrug7qLhGKGyInTZbvT7MQ-Q9hCZ0weM8'),
  },
});
