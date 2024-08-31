<script>
	let links = [
		'https://www.vasistakitchen.com/',
		'https://catherinecbse.info/',
		'https://github.com/Meghashyam1218/BEAM',
		'#'
	];
</script>

<section id="work" class="work px-4 md:m-4 scroll-m-24">
	<h2 class="lg:text-4xl text-text-800 md:text-3xl text-2xl">My Work</h2>
	<div
		class="image-slides transition-[grid-template-rows,grid-template-columns] ease-in-out duration-[800ms] h-[335px] xs:h-[380px] sm:h-[550px] md:h-[600px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] mt-2 tracking-tighter grid max-lg:grid-rows-[60%_13%_13%_13%] mage-slides lg:grid-cols-[4fr_1fr_1fr_1fr]"
	>
		{#each links as link, i}
			<div
				class="slide group relative hoverable border-2 m-1 border-secondary-600 rounded-[3rem]"
			>
				<img
					class="rounded-[3rem] object-cover transition-all h-full w-full"
					alt="Work Img"
					src={`/work/mockup${i + 1}.jpg`}
				/>
				{#if i != 3}
					<a
						href={link}
						target="_blank"
						class="text group-hover:scale-100 duration-300 group-hover:opacity-100 delay-200 scale-0 opacity-0 absolute border-background-700 border-2 bottom-4 right-4 lg:text-xl p-2 px-6 rounded-full transition-all ease-in-out bg-background-300 text-text-950 md:text-base text-sm hover:underline underline-offset-4"
						>Visit</a
					>
				{:else}
					<p
						class="text group-hover:scale-100 duration-300 group-hover:opacity-100 delay-200 scale-0 opacity-0 absolute border-background-700 border-2 bottom-4 right-4 lg:text-xl p-2 px-6 rounded-full transition-all ease-in-out bg-background-300 text-text-950 md:text-base text-sm hover:underline underline-offset-4"
					>
						Locked
					</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	@media not all and (min-width: 1324px) {
		.image-slides:has(
				.slide:nth-child(1):hover,
				.slide:nth-child(1):focus-within
			) {
			grid-template-rows: 60% 13% 13% 13%;
		}
		.image-slides:has(
				.slide:nth-child(2):hover,
				.slide:nth-child(2):focus-within
			) {
			grid-template-rows: 13% 60% 13% 13%;
		}
		.image-slides:has(
				.slide:nth-child(3):hover,
				.slide:nth-child(3):focus-within
			) {
			grid-template-rows: 13% 13% 60% 13%;
		}
		.image-slides:has(
				.slide:nth-child(4):hover,
				.slide:nth-child(4):focus-within
			) {
			grid-template-rows: 13% 13% 13% 60%;
		}
	}
	@media (min-width: 1324px) {
		.image-slides:has(
				.slide:nth-child(1):hover,
				.slide:nth-child(1):focus-within
			) {
			grid-template-columns: 4fr 1fr 1fr 1fr;
		}
		.image-slides:has(
				.slide:nth-child(2):hover,
				.slide:nth-child(2):focus-within
			) {
			grid-template-columns: 1fr 4fr 1fr 1fr;
		}
		.image-slides:has(
				.slide:nth-child(3):hover,
				.slide:nth-child(3):focus-within
			) {
			grid-template-columns: 1fr 1fr 4fr 1fr;
		}
		.image-slides:has(
				.slide:nth-child(4):hover,
				.slide:nth-child(4):focus-within
			) {
			grid-template-columns: 1fr 1fr 1fr 4fr;
		}
	}
	.slide:nth-child(1):not(:has(~ .slide:hover, ~ .slide:focus-within)) .text {
		transform: scale(1);
		opacity: 1;
	}
</style>
