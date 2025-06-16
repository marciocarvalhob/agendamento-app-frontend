import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configurações para o build:
  base: '/',          // Define a URL base para a aplicação.
  root: 'public',          // A raiz do seu projeto Vite é o diretório atual do repositório clonado.
  publicDir: 'public', // A pasta que contém o index.html e outros assets estáticos.
  build: {
    outDir: 'dist',    // O diretório de saída para os arquivos compilados.
  },
})