<script>
	import { wordGlitch } from '../helpers';
	let name;
	// wordGlitch;
</script>

<section class="hero about md:m-4 m-2 flex flex-col items-center">
	<!-- <h1 class="text-text-0">About Me</h1> -->
	<div class="text-text-800 flex flex-col items-center">
		<h2 class="lg:text-4xl md:text-3xl text-2xl">Hi 👋, I'm</h2>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<h1
			id="hero-name"
			bind:this={name}
			on:mouseover={() => {
				wordGlitch('G.Meghashyam.', name);
			}}
			class="name hoverable lg:text-5xl md:text-4xl text-3xl"
		>
			G.Meghashyam.
		</h1>
		<h4
			class="text-text-900 text-center lg:text-2xl md:text-xl sm:text-base text-sm"
		>
			|A Harmonious blend of creativity and utility|
		</h4>
		<h4
			class="text-text-900 lg:text-2xl text-center md:text-xl sm:text-base text-sm"
		>
			|Freelance Web and Mobile Application Developer|
		</h4>
		<!-- <h4 class="">~ “A creative mess is better than tidy idleness."</h4> -->
	</div>
	<button
		class="lg:text-xl md:text-base text-sm border-primary-400 border-2 bg-primary-50 hover:bg-primary-200 transition-all ease-in m-4 p-2 rounded-xl text-text-900"
		><a href="mailto:gurrammeghashyam@gmail.com">Contact Me</a></button
	>
	<!-- <Button /> -->
</section>

<style>
	.name {
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: var(--text-900);
		color: var(--text-300);
	}
</style>
