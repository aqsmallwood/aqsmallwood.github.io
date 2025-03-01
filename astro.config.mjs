import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-dog-breeding-company.com',
  integrations: [tailwind()],
  base: '/amc360',
  // Add any other configurations as needed
}); 