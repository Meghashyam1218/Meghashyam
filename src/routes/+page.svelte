<script>
	import { onMount } from 'svelte';
	function loader() {
		const letters = 'ABCDEFGHFIJKLMNOPQRSTUVWXY';
		let iterations = 0;
		let interval = null;
		interval = setInterval(() => {
			const el = document.getElementById('helloworld');
			el.innerText = el.innerText
				.split('')
				.map((letter, index) => {
					if (index < iterations) {
						return el.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join('');

			if (iterations >= el.dataset.value.length) {
				clearInterval(interval);
			}
			iterations += 1 / 2;
		}, 150);
	}
	onMount(() => {
		loader();
	});
</script>

<div class="loader h-[100vh] grid justify-items-center items-center">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<h1 data-value="HELLO WORLD!" id="helloworld" class="text-9xl text-neutral-200 cursor-default">
		HELLO WORLD!
	</h1>
</div>

<style>
	.loader h1 {
		font-family: Gridular;
	}
</style>
