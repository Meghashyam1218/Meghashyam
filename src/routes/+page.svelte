<script>
	import About from '../lib/home/about.svelte';
	import Squiggle from '../lib/home/components/squiggle.svelte';
	import Work from '../lib/home/work.svelte';
	import Preloader from '../lib/preloader.svelte';
	import { preloader } from '../lib/store.js';
</script>

<Preloader />

<section class=" container mx-auto hero {$preloader ? 'overflow-hidden' : ''}">
	<About />
	<Squiggle />
	<Work />
	<Squiggle />
	<p class="text-primary-900 text-center p-4">
		＼（〇_ｏ）／ Nothing's Working<br />Work in progress
	</p>
</section>
