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
						size += 20;
						document.body.style.cursor = 'none';
					});
					hoverable.addEventListener('mouseleave', () => {
						size -= 20;
					});
				});
			});
		};
		initCursor();
	});
</script>

<div>
	<div bind:this={dot} class="cursor-dot w-[5px] h-[5px] bg-white" />
	<div
		bind:this={outline}
		class="cursor-outline w-7 h-7 border-2 border-solid border-white opacity-50"
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
		z-index: 1;
		pointer-events: none;
	}

	.cursor-outline {
		transition: left 0.07s, top 0.07s;
	}
</style>
