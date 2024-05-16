/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-2px)' },
					'50%': { transform: 'translateX(2px)' },
					'75%': { transform: 'translateX(-2px)' }
				},
				red: {
					'0%': { color: 'inherit' },
					'100%': { color: 'red' }
				}
			},
			animation: {
				shake: 'shake 0.5s infinite',
				red: 'red 10s forwards'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
