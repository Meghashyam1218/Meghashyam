<script>
	import gsap from 'gsap';
	import { preloader } from './store';
	import { onMount } from 'svelte';
	console.log($preloader);

	let text;
	let progess_bar;
	let progress;
	let fill = 0;
	let load = true;
	let button;
	let list = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '▬▬ι════════ﺤ', `✧( $ _ $ )✧.`, 'HELLO WORLD!'];

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
					return letters[Math.floor(Math.random() * 10)];
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
			setTimeout(display, 700);
			return;
		}
		fill += Math.floor(Math.random() * 25) + 1;
		if (fill > 100) {
			fill = 100;
			load = false;
			setTimeout(display, 700);
		}
		progess_bar.style.width = `${fill}%`;
		let delay = Math.floor(Math.random() * 200) + 150;
		setTimeout(updateCounter, delay);
	}
	let index = 0;

	function processListWithDelay(list, delay) {
		if (index < list.length) {
			setTimeout(() => {
				loader(list[index]);
				index++;
				processListWithDelay(list, 700);
			}, delay);
		}
	}

	function handleClick() {
		button.style.transform = 'rotate3d(1, .5, .5, 180deg) scale(0)';
		button.style.opacity = '0';
		let tl = gsap.timeline();
		tl.to('#helloworld', {
			duration: 0.5,
			rotate: 180,
			scale: 0
		});

		setTimeout(() => {
			document.querySelectorAll('.bgdiv').forEach(function () {
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

						console.log($preloader);
					}
				});
			});
		}, 500);
		let outlinehover = document.getElementById('cursorO');
		outlinehover.style.width = '44px';
		outlinehover.style.height = '44px';
		outlinehover.style.borderColor = 'rgb(255 255 255 / 0.1)';
		document.body.style.overflow = 'scroll';
		document.body.style.overflowX = 'hidden';
		window.scrollTo(0, 0);
	}
	onMount(() => {
		gsap.registerPlugin();
		updateCounter();
		processListWithDelay(list, 0);
	});
</script>

{#if $preloader}
	<section id="preloader" class=" fixed top-0 z-[998] w-[100dvw] h-[100dvh]">
		<div class="flex absolute z-[-10] w-[100vw] h-[100dvh] overflow-hidden">
			<div class="bgdiv bg-gradient-radial w-[100%]" />
			<!-- <div class="bgdiv bg-gradient-radial w-[25%]" />
			<div class="bgdiv bg-gradient-radial w-[25%]" />
			<div class="bgdiv bg-gradient-radial w-[25%]" /> -->
		</div>
		<div class="loader top-0 left-0 p-8 h-[100dvh] grid items-end overflow-hidden">
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<h2
				bind:this={text}
				on:mouseover={() => {
					if (!load) {
						loader('HELLO WORLD!');
					}
				}}
				data-value="HELLO WORLD!"
				id="helloworld"
				class="hoverable lg:text-4xl md:text-3xl text-2xl inline-block max-w-[560px] mx-auto text-nowrap text-text-950 cursor-default"
			>
				ABCDEF GHIJK
			</h2>
			<div class="flex mb-10 flex-col items-center relative">
				<div
					bind:this={progress}
					class="progress transition-all ease-in w-[100%] flex gap-4 flex-col items-center"
				>
					<div class="progress-bar relative w-[100%] h-3 bg-accent-200 rounded-3xl">
						<div
							bind:this={progess_bar}
							class="progress-fill transition-all bg-accent-500 ease-out absolute h-3 rounded-2xl"
						/>
					</div>
					<small class="loading text-text-800 font-mono">
						{#if load}LOADING...{:else}COMPLETED{/if}
					</small>
				</div>
				<button
					on:click={() => {
						handleClick();
					}}
					class="hellobtn lg:text-xl md:text-base text-sm bg-primary-200 hover:bg-primary-0 absolute p-4 -translate-y-[40%] delay-200 opacity-0 rounded-3xl px-8 text-text-800 hover:text-text-0 transition-all ease-in-out"
					bind:this={button}>¯\_(ツ)_/¯ Click me</button
				>
			</div>
		</div>
	</section>
{/if}

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
		/* background-image: radial-gradient(#14050f 0.75px, #faebf5 0.75px); */
		background-size: 15px 15px;
	}
	/* .progress h1 {
		margin: 10px 20px 0 0;
		margin-bottom: 10px;
	} */
</style>
