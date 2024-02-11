<script>
	import { onMount } from 'svelte';
	import CustomCursor from '../lib/customCursor.svelte';
	import './styles.css';
	import gsap from 'gsap';
	import preloader from '../lib/store';

	console.log($preloader);

	let text;
	let progess_bar;
	let progress;
	let fill = 0;
	let load = true;
	let button;
	let list = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '▬▬ι════════ﺤ', `✧( $ _ $ )✧.`, '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'HELLO WORLD!'];

	function loader(word = 'HELLO WORLD!') {
		const letters = 'ABCDEFGHFIJKLMNOPQRSTUVWXY123456789';
		console.log(word);
		let iterations = 0;
		let interval = null;
		interval = setInterval(() => {
			text.innerText = text.innerText
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
		}, 15);
	}

	function display() {
		progress.style.transform = 'scaleX(0)';
		button.style.transform = 'rotate3d(1, .5, .5, 0deg) scale(1)';
		button.style.opacity = '100';
	}

	function updateCounter() {
		if (fill === 100) {
			load = false;
			setTimeout(display, 1200);
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
	let index = 0;

	function processListWithDelay(list, delay) {
		if (index < list.length) {
			setTimeout(() => {
				loader(list[index]);
				index++;
				processListWithDelay(list, 1500);
			}, delay);
		}
	}

	function handleClick() {
		button.style.transform = 'rotate3d(1, .5, .5, 180deg) scale(0)';
		button.style.opacity = '0';
		let tl = gsap.timeline();
		tl.to('#helloworld', {
			rotate: 180,
			scale: 0
		});
		setTimeout(() => {
			document.querySelectorAll('.bgdiv').forEach(function (box) {
				tl.to('.bgdiv', {
					duration: 0.5,
					height: 0,
					ease: 'power1.inOut',
					stagger: {
						from: 'start',
						axis: 'x',
						ease: 'power1.inOut',
						amount: 0.5
					},

					onComplete: () => {
						$preloader = false;
					}
				});
			});
		}, 500);
	}
	onMount(() => {
		gsap.registerPlugin();
		updateCounter();
		processListWithDelay(list, 0);
	});
</script>

{#if $preloader}
	<section id="preloader" class="absolute z-[99] w-[100vw] h-[100dvh]">
		<div class="flex absolute z-[-10] w-[100vw] h-[100dvh] overflow-hidden">
			<div class="bgdiv w-[25%]" />
			<div class="bgdiv w-[25%]" />
			<div class="bgdiv w-[25%]" />
			<div class="bgdiv w-[25%]" />
		</div>
		<div class="loader top-0 left-0 p-8 h-[100dvh] grid items-end overflow-hidden">
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<h1
				bind:this={text}
				on:mouseover={() => {
					if (!load) {
						loader('HELLO WORLD!');
					}
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
					on:click={() => {
						handleClick();
					}}
					class="hellobtn bg-[#2a292a] absolute p-4 -translate-y-[40%] delay-200 opacity-0 rounded-3xl px-8 text-neutral-500 hover:text-neutral-300 transition-all ease-in-out"
					bind:this={button}>¯\_(ツ)_/¯ Click me</button
				>
			</div>
		</div>
	</section>
{/if}
<slot />

<CustomCursor />

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

	.bgdiv {
		opacity: 1;
		background-image: radial-gradient(#2a2a2a 0.75px, #0e100f 0.75px);
		background-size: 15px 15px;
	}
	/* .progress h1 {
		margin: 10px 20px 0 0;
		margin-bottom: 10px;
	} */
</style>
