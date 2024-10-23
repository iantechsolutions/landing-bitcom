/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'landing-light': "url('/images/Bitcompay-BACKGROUND-White.jpg')",
				'landing-dark': "url('/images/Bitcompay-BACKGROUND-Black-entero.jpg')",
			}
		},
	},
	plugins: [],
}
