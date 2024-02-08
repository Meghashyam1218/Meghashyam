<script>
	import { onMount } from 'svelte';
	import Console from '../lib/console.svelte';
	let me;
	let progess_bar;
	let progress;
	let fill = 0;
	let load = true;
	let button;
	let list = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',"▬▬ι════════ﺤ",'(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', `✧( $ _ $ )✧.`, 'HELLO WORLD!'];
	function loader(word = 'HELLO WORLD!') {
		const letters = 'ABCDEFGHFIJKLMNOPQRSTUVWXY123456789';
		console.log(word);
		let iterations = 0;
		let interval = null;
		interval = setInterval(() => {
			me.innerText = me.innerText
				.split('')
				.map((letter, index) => {
					if (index < iterations) {
						return word[index];
					}
					return letters[Math.floor(Math.random() * 35)];
				})
				.join('');

			if (iterations >= word.length) {
				clearInterval(interval);
			}
			iterations += 1 / 2;
			// fill = 9.0909 * iterations;
			// if (fill <= 100) {
			// 	progess.style.width = `${fill}%`;
			// }
		}, 15);
	}
	onMount(() => {
		function display() {
			progress.style.transform = 'scaleX(0)';
			button.style.transform = 'rotate3d(1, .5, .5, 0deg) scale(1)';
			button.style.opacity = '100';
		}
		function updateCounter() {
			if (fill === 100) {
				return;
			}
			fill += Math.floor(Math.random() * 10) + 1;
			if (fill > 100) {
				fill = 100;
				load = false;
				setTimeout(display, 1200);
			}
			progess_bar.style.width = `${fill}%`;
			let delay = Math.floor(Math.random() * 200) + 200;
			setTimeout(updateCounter, delay);
		}
		updateCounter();
		let index = 0;

		function processListWithDelay(list, delay) {
			if (index < list.length) {
				setTimeout(() => {
					loader(list[index]);
					index++;
					processListWithDelay(list, 1500); // Call the function recursively for the next iteration
				}, delay);
			}
		}

		// Call the function with your list and desired delay (in milliseconds)
		processListWithDelay(list, 0);
	});
</script>

<div class="loader p-8 h-[100vh] grid items-end overflow-hidden">
	<h1
		bind:this={me}
		on:mouseover={() => {
			loader('HELLO WORLD!');
		}}
		data-value="HELLO WORLD!"
		id="helloworld"
		class="hoverable text-3xl inline-block max-w-[560px] mx-auto text-nowrap sm:text-5xl xs:text-4xl md:text-7xl text-neutral-300 cursor-default"
	>
		ABCDEF GHIJK
	</h1>
	<div class="flex mb-10 flex-col items-center relative">
		<div
			bind:this={progress}
			class="progress transition-all ease-in w-[100%] flex gap-4 flex-col items-center"
		>
			<div class="progress-bar relative w-[100%] h-3 bg-[#2a292a] rounded-3xl">
				<div
					bind:this={progess_bar}
					class="progress-fill transition-all ease-out absolute h-3 bg-neutral-400 rounded-2xl"
				/>
			</div>
			<h1 class="loading text-neutral-200 font-mono">
				{#if load}LOADING...{:else}COMPLETED{/if}
			</h1>
		</div>
		<button
			class="hellobtn  bg-[#2a292a] absolute p-4 -translate-y-[40%] delay-200 opacity-0 rounded-3xl px-8 text-neutral-500 hover:text-neutral-300 transition-all ease-in-out"
			bind:this={button}>¯\_(ツ)_/¯ Click me</button
		>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Gridular';
		src: url('/fonts/Gridular-Regular.woff2') format('woff2'),
			url('/fonts/Gridular-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	#helloworld {
		font-family: Gridular;
	}
	.hellobtn {
		transform: rotate3d(1, 0.5, 0.5, 180deg) scale(0);
		transition: all ease-in 0.4s;
	}
	/* .progress h1 {
		margin: 10px 20px 0 0;
		margin-bottom: 10px;
	} */
</style>
