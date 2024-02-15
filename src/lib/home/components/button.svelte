<!-- Inspiration: https://dribbble.com/shots/4397812-Click-Me -->

<a href="/#" class="cta max-md:hidden inline-flex items-center mt-2">
	<span class="text-sm text-neutral-400">Contact Me</span>
	<svg width="13px" height="10px" class=" stroke-neutral-400" viewBox="0 0 13 10">
		<path d="M1,5 L11,5" />
		<polyline points="8 1 12 5 8 9" />
	</svg>
</a>

<style>
	a {
		text-decoration: none;
	}

	.cta {
		position: relative;
		padding: 19px 22px;
		transition: all 0.2s ease;
		max-width: 197px;

	}
	.cta:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-radius: 28px;
		background: #3f3f3fb2;
		width: 56px;
		height: 56px;
		max-width: 197px;
		transition: all 0.3s ease;
	}
	.cta span {
		position: relative;
		line-height: 18px;
		font-weight: 900;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		vertical-align: middle;
	}
	.cta svg {
		position: relative;
		top: 0;
		margin-left: 10px;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2;
		transform: translateX(-5px);
		transition: all 0.3s ease;
	}
	.cta:hover:before {
		width: 100%;
		background: rgba(61, 61, 61, 0.5);
	}
	.cta:hover svg {
		transform: translateX(0);
	}
	.cta:active {
		transform: scale(0.96);
	}
</style>
