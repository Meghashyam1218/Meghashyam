<script>
	import CustomCursor from '../lib/customCursor.svelte';
	import './styles.css';
	import Navbar from '../lib/home/navbar.svelte';
	import { onMount } from 'svelte';
	import { darkMode } from '../lib/store';
	onMount(() => {
		var body = document.body;
		if ($darkMode) {
			body.classList.add('dark');
			console.log('hello');
		} else {
			body.classList.remove('dark');
			console.log('hello2');
		}
	});
</script>

<Navbar />
<div
	class=" portfolio bg-background-50 fixed top-0 w-[100dvw] h-[200dvh] z-[-998] pointer-events-none"
/>
<slot />
<CustomCursor />

<style>
	/* .portfolio {
		background: repeating-linear-gradient(
				90deg,
				var(--accent-50) 0,
				var(--accent-100) 5%,
				transparent 0,
				transparent 50%
			),
			repeating-linear-gradient(
				180deg,
				var(--accent-50) 0,
				var(--accent-100) 5%,
				transparent 0,
				transparent 50%
			);
		background-size: 3em 3em;
		background-color: var(--background);
	} */
	.portfolio {
		background-size: 312px 99.84px;
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 312 99.84" width="312" height="99.84" style="opacity: 0.1; filter: grayscale(1);"><text x="0em" y="1em" font-size="32" transform="rotate(30 20 19.2)">📟</text><text x="1.625em" y="2.3em" font-size="32" transform="rotate(30 72 60.8)">📱</text><text x="3.25em" y="1em" font-size="32" transform="rotate(30 124 19.2)">💻</text><text x="4.875em" y="2.3em" font-size="32" transform="rotate(30 176 60.8)">⌨️</text><text x="6.5em" y="1em" font-size="32" transform="rotate(30 228 19.2)">⚡️</text><text x="8.125em" y="2.3em" font-size="32" transform="rotate(30 280 60.8)">☕️</text></svg>');
	}
	.portfolio::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(
			0,
			0,
			255,
			0.5
		); /* Adjust color and opacity as needed */
		mix-blend-mode: overlay; /* Blend mode for color blending */
	}
</style>
