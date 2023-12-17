/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#219EBC',
				primary_light:'#8ECAE6',
				primary_dark: '#00476A',
				secondary: '#FD9E02',
				secondary_light: '#FFB703',
				secondary_dark: '#FB8500',
				platinum: '#E7E7E7',
				grey: '#343434',
				grey_light: '#494949',
				grey_dark: '#232323'
			}
		},
	},
	plugins: [],
}
