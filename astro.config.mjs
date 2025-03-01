import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-dog-breeding-company.com',
  integrations: [tailwind()],
  // Add any other configurations as needed
}); 