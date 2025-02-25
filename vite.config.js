import {defineConfig} from 'vite'
import React from '@vitejs/plugin-react'
import Pages from "vite-plugin-pages";
import { ViteAliases} from "vite-aliases";
// https://vite.dev/config/
export default defineConfig({
    plugins: [React(), Pages(), ViteAliases()]
});
