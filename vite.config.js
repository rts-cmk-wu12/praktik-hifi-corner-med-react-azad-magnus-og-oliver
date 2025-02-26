import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import { ViteAliases } from 'vite-aliases';


export default defineConfig({
    plugins: [react(), Pages(), ViteAliases()],
});
