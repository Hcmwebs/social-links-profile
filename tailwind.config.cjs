/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsl(0, 0%, 20%)',
					secondary: 'hsl(0, 0%, 12%)',
					accent: '#c5f82a',
					neutral: '#8ef9f3',
					'base-100': 'hsl(0, 0%, 8%)',
					error: '#e53d00',
					warning: '#fe7f2d',
					success: '#c5f82a',
					white: '#ffffff',
					black: 'hsl(0, 0%, 8%)',
				},
			},
			'night',
			'winter',
		],
	},
};
