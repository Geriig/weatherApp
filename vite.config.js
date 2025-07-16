import { defineConfig } from "vite";
import { fileURLToPath } from "url";

export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL('./src', import.meta.url)),
            "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
            "@css": fileURLToPath(new URL('./src/assets/css', import.meta.url))
            
        }
    }
});