// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'A&Y Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adamzh08/AntGod' }],
			sidebar: [
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About Us', slug: 'about/about_us' },
					],
				},
				{
					label: 'Prometheus',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: 'prometheus/intro' },
						{ label: 'Standard game', link: '/standard/standard' },
						{ label: 'Neat game', link: '/neat/neat' },
					],
				},
			],
		}),
	],
});
