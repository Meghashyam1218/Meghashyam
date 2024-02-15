<script>
	export let load
	import Button from './components/button.svelte';

	import Shapes from './components/shapes.svelte';
</script>
<section class="bg-neutral-900 h-[100vh] grid lg:mt-[-164px] mt-[-156px] items-center ">
<div class="about max-w-[1730px] px-8 pb-8 max-lg:flex-col h-max  flex lg:justify-evenly mx-auto">
	<div class="left lg:flex flex-col justify-around">
		<h1 class=" text-5xl md:text-7xl 2md:text-8xl xl:text-9xl text-neutral-300 hover:text-[#c33838] font-extrabold">About Me</h1>
		<div class="flex md:gap-2 text-neutral-400 hover:text-neutral-500 flex-col md:p-4 py-1">
			<p class=" 2xs:text-xl md:text-2xl xl:text-3xl font-bold hover:text-[#c5992f]">
				Hi 👋, I'm <span class=" text-xl 2xs:text-2xl md:text-3xl xl:text-4xl">G.Meghashyam</span>.
			</p>
			<div class="2xs:text-xl md:text-2xl xl:text-3xl font-bold">
				<p class="my-1 md:mb-2 hover:text-[#36a45e]">A Harmonious blend of creativity and utility 🚀✨</p>
				<p class="hover:text-[#6377b5]">~ “A creative mess is better than tidy idleness."</p>
			</div>
		</div>
		<Button />
		<button class="flex mt-2 md:hidden items-center bg-neutral-800 p-2 px-3 rounded-full"
			><span class="font-bold text-neutral-400">Contact Me</span>
			<svg
				width="13px"
				height="10px"
				stroke-width="2"
				class=" stroke-neutral-400"
				viewBox="0 0 13 10"
			>
				<!-- <path d="M1,5 L11,5" /> -->
				<polyline points="8 1 12 5 8 9" />
			</svg></button
		>
	</div>
	<Shapes load={load} />
</div>
</section>