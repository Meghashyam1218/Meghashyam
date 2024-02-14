<script>
	import { onMount } from 'svelte';

	let dot;
	let outline;
	onMount(() => {
		const initCursor = () => {
			window.addEventListener('mousemove', function (e) {
				const posX = e.clientX;
				const posY = e.clientY;

				dot.style.left = `${posX}px`;
				dot.style.top = `${posY}px`;

				outline.style.left = `${posX}px`;
				outline.style.top = `${posY}px`;
				const hoverables = document.querySelectorAll('.hoverable, a, button');
				hoverables.forEach((hoverable) => {
					hoverable.addEventListener('mouseenter', () => {
						outline.style.width="60px"
						outline.style.height="60px"
						hoverable.style.cursor = 'none';
						outline.style.borderColor = "rgb(255 255 255)"

					});
					hoverable.addEventListener('mouseleave', () => {
						outline.style.width="44px"
						outline.style.height="44px"
						outline.style.borderColor = "rgb(255 255 255 / 0.1)"


					});
				});
			});
		};
		initCursor();
	});
</script>

<div class=" max-lg:hidden ">
	<div bind:this={dot} class="cursor-dot w-[5px] h-[5px] bg-white" />
	<div id="cursorO"
		bind:this={outline}
		class="cursor-outline w-11 h-11 border-2 border-solid bg-blend-multiply bg-blue-700/20 border-white/10 opacity-50"
	/>
</div>

<style>
	.cursor-dot,
	.cursor-outline {
		position: fixed;
		top: O;
		left: O;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		z-index: 999;
		pointer-events: none;
	}

	.cursor-outline {
		transition: left 0.07s, top 0.07s, width 0.7s, height 0.7s;
	}
</style>
