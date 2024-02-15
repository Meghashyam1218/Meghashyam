<script>
	import { onMount } from 'svelte';
	import Navbar from '../lib/home/navbar.svelte';
	import Preloader from '../lib/preloader.svelte';
	import About from '../lib/home/about.svelte';
	import { preloader } from '../lib/store.js';

	onMount(() => {});
</script>

<Preloader />

<section class="hero h-[100dvh] bg-zinc-950 {$preloader ? 'overflow-hidden' : ''}">
	<Navbar />
	<About load={!$preloader} />

	<p class="text-neutral-400 text-center p-4">
		＼（〇_ｏ）／ Nothing's Working<br />Work in progress
	</p>
</section>

<style>
</style>
