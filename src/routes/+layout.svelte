<script>
	import { onMount } from 'svelte';
	import './styles.css';
	import { Cursor } from 'curseur';
	
</script>

<slot />
<div class="cursor-element">
	<Cursor
		color="green"
		mixBlendMode="exclusion"
		size="28"
		shape= 'circle'
	/>
</div>