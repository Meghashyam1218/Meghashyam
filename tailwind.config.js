/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'3xs': '320px',
			// => @media (min-width: 640px) { ... }

			'2xs': '375px',
			// => @media (min-width: 640px) { ... }

			xs: '425px',
			// => @media (min-width: 640px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			'2md': '845px',
			// => @media (min-width: 690px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1440px'
			// => @media (min-width: 1536px) { ... }
		},
		fontSize: {
			sm: '0.750rem',
			base: '1rem',
			xl: '1.333rem',
			'2xl': '1.777rem',
			'3xl': '2.369rem',
			'4xl': '3.158rem',
			'5xl': '4.210rem'
		},
		fontFamily: {
			heading: 'Chivo Mono',
			body: 'Martian Mono'
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		},
		colors: {
			text: {
				0: 'var(--text)',
				50: 'var(--text-50)',
				100: 'var(--text-100)',
				200: 'var(--text-200)',
				300: 'var(--text-300)',
				400: 'var(--text-400)',
				500: 'var(--text-500)',
				600: 'var(--text-600)',
				700: 'var(--text-700)',
				800: 'var(--text-800)',
				900: 'var(--text-900)',
				950: 'var(--text-950)'
			},
			background: {
				0: 'var(--background)',
				50: 'var(--background-50)',
				100: 'var(--background-100)',
				200: 'var(--background-200)',
				300: 'var(--background-300)',
				400: 'var(--background-400)',
				500: 'var(--background-500)',
				600: 'var(--background-600)',
				700: 'var(--background-700)',
				800: 'var(--background-800)',
				900: 'var(--background-900)',
				950: 'var(--background-950)'
			},
			primary: {
				0: 'var(--primary)',
				50: 'var(--primary-50)',
				100: 'var(--primary-100)',
				200: 'var(--primary-200)',
				300: 'var(--primary-300)',
				400: 'var(--primary-400)',
				500: 'var(--primary-500)',
				600: 'var(--primary-600)',
				700: 'var(--primary-700)',
				800: 'var(--primary-800)',
				900: 'var(--primary-900)',
				950: 'var(--primary-950)'
			},
			secondary: {
				0: 'var(--secondary)',
				50: 'var(--secondary-50)',
				100: 'var(--secondary-100)',
				200: 'var(--secondary-200)',
				300: 'var(--secondary-300)',
				400: 'var(--secondary-400)',
				500: 'var(--secondary-500)',
				600: 'var(--secondary-600)',
				700: 'var(--secondary-700)',
				800: 'var(--secondary-800)',
				900: 'var(--secondary-900)',
				950: 'var(--secondary-950)'
			},
			accent: {
				0: 'var(--accent)',
				50: 'var(--accent-50)',
				100: 'var(--accent-100)',
				200: 'var(--accent-200)',
				300: 'var(--accent-300)',
				400: 'var(--accent-400)',
				500: 'var(--accent-500)',
				600: 'var(--accent-600)',
				700: 'var(--accent-700)',
				800: 'var(--accent-800)',
				900: 'var(--accent-900)',
				950: 'var(--accent-950)'
			}
		},

		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--accent) 0.75px, var(--background) 0.75px)'
			}
		}
	},
	plugins: []
};
