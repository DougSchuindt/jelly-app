import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'My Cool App',
                short_name: 'CoolApp',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#317EFB',
                icons: [
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    define: {
        __NPM_LIFECYCLE_EVENT__: JSON.stringify(process.env.npm_lifecycle_event),
    },
})
