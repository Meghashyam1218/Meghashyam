<script>
	import { onMount } from 'svelte';
	import { darkMode } from '../store';

	var menuOpen = false;
	function toggleDarkMode() {
		var body = document.body;

		if (body.classList.contains('dark')) {
			body.classList.remove('dark');
			$darkMode = false;
			// document.getElementById('checkbox').checked = false;
		} else {
			body.classList.add('dark');
			$darkMode = true;
			// document.getElementById('checkbox').checked = true;
		}
	}
	onMount(() => {
		if ($darkMode) {
			// document.getElementById('checkbox').checked = true;
		} else {
			// document.getElementById('checkbox').checked = false;
		}
	});
</script>

<section
	class="container mx-auto navbar sticky z-[998] top-0 p-2 flex-row flex items-start sm:items-center justify-between"
>
	<div>
		<button
			on:click={() => {
				if (menuOpen) {
					menuOpen = false;
				} else {
					menuOpen = true;
				}
			}}
			class="menu-mobile menu bg-accent-200 z-[999] p-2 border-2 border-accent-200 hover:border-accent-500 focus:border-accent-500 rounded-lg absolute sm:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="{!menuOpen
					? 'max-sm:scale-100 origin-top-left'
					: 'max-sm:scale-0 origin-top-left'} absolute"
				viewBox="0 0 24 24"
				width="16"
				height="16"
				color="var(--text)"
				fill="none"
			>
				<path
					d="M7 5L17 5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M4 12L20 12"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M7 19L17 19"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class={menuOpen ? 'max-sm:scale-100 origin-top-left' : 'max-sm:scale-0 origin-top-left'}
				width="16"
				height="16"
				color="var(--text)"
				fill="none"
			>
				<path
					d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<div
			class="menu bg-accent-200 p-2 max-sm:pl-4 transition-all ease-in rounded-lg gap-1 flex sm:scale-100 max-sm:flex-col max-sm:items-end {menuOpen
				? 'max-sm:scale-100 origin-top-left'
				: 'max-sm:scale-0 origin-top-left'}"
		>
			<a
				href="/#"
				class="menu-item text-text-0 lg:text-base text-sm hover:bg-accent-300 p-1 rounded-md flex items-center gap-1 max-sm:flex-row-reverse"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
					><path
						stroke="currentColor"
						stroke-width="2"
						d="M3.5 11.1213V19C3.5 19.8284 4.17157 20.5 5 20.5H8.5C9.32843 20.5 10 19.8284 10 19V14.75C10 14.3358 10.3358 14 10.75 14H13.25C13.6642 14 14 14.3358 14 14.75V19C14 19.8284 14.6716 20.5 15.5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V11.1213C20.5 10.7235 20.342 10.342 20.0607 10.0607L13.0607 3.06066C12.4749 2.47487 11.5251 2.47487 10.9393 3.06066L3.93934 10.0607C3.65804 10.342 3.5 10.7235 3.5 11.1213Z"
					/></svg
				>Home</a
			>
			<a
				href="/#work"
				class="menu-item text-text-0 lg:text-base text-sm hover:bg-accent-300 p-1 rounded-md flex items-center gap-1 max-sm:flex-row-reverse"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
					><path
						stroke="currentColor"
						stroke-linecap="square"
						stroke-width="2"
						d="M3.5 20.5L20.5 20.5C21.3284 20.5 22 19.8284 22 19L22 7.5C22 6.67157 21.3284 6 20.5 6L3.5 6C2.67157 6 2 6.67157 2 7.5L2 19C2 19.8284 2.67157 20.5 3.5 20.5Z"
					/><path
						stroke="currentColor"
						stroke-width="2"
						d="M8 6V3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V6"
					/><path
						stroke="currentColor"
						stroke-width="2"
						d="M22 10.6923L17.0286 13.0414C15.6928 13.6726 14.2337 14 12.7563 14L11.2849 14C9.781 14 8.2965 13.6608 6.94187 13.0077L2 10.625"
					/><path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M10.75 10H13.25"
					/></svg
				>Work</a
			>
			<!-- <a
				href="/#"
				class="menu-item text-text-0 lg:text-base text-sm hover:bg-accent-300 p-1 rounded-md flex items-center gap-1 max-sm:flex-row-reverse"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M6.5 16.5L3.06066 13.0607C2.47488 12.4749 2.47488 11.5251 3.06066 10.9393L6.5 7.5"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M17.5 16.5L20.9393 13.0607C21.5251 12.4749 21.5251 11.5251 20.9393 10.9393L17.5 7.5"
					/>
					<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 20.5L14 3.5" />
				</svg>Skills</a
			> -->
			<a
				href="mailto:gurrammeghashyam@gmail.com"
				class="menu-item text-text-0 lg:text-base text-sm hover:bg-accent-300 p-1 rounded-md flex items-center gap-1 max-sm:flex-row-reverse"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
				>
					<path
						stroke="currentColor"
						stroke-width="2"
						d="M2 6C2 5.17157 2.67157 4.5 3.5 4.5H20.5C21.3284 4.5 22 5.17157 22 6V18C22 18.8284 21.3284 19.5 20.5 19.5H3.5C2.67157 19.5 2 18.8284 2 18V6Z"
					/>
					<path
						stroke="currentColor"
						stroke-width="2"
						d="M2 5.5L11.0454 12.9625C11.5997 13.4197 12.4003 13.4197 12.9546 12.9625L22 5.5"
					/>
				</svg>Contact</a
			>
		</div>
	</div>
	<div class="dark-mode bg-accent-200 p-2 rounded-lg">
		<button
			href="/#"
			class="dark-mode-btn text-text-0 lg:text-base text-sm flex flex-row items-center gap-1 hover:bg-accent-300 p-1 rounded-md"
			on:click={toggleDarkMode}
		>
			<!-- <p class="tracking-tight">Dark Mode</p> -->
			{#if $darkMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="var(--accent-900)"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
				>
					<circle cx="12" cy="12" r="4.25" fill="var(--accent-900)" />
					<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 1.25V3.75" />
					<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 20.25V22.75" />
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M1.25 12L3.75 12"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M4.40771 19.5922L6.11428 17.8856"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M4.40771 4.40781L6.11428 6.11437"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M19.5923 19.5922L17.8857 17.8856"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M19.5923 4.40781L17.8857 6.11437"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M20.25 12L22.75 12"
					/>
				</svg>{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="var(--accent-900)"
					viewBox="0 0 24 24"
					class="lg:w-[1.25rem] lg:h-[1.25rem] w-[1rem] h-[1rem] inline"
				>
					<path
						d="M18.0108 15.9604C12.5038 15.9604 8.03957 11.4962 8.03957 5.98921C8.03957 5.10866 8.19657 4.23454 8.41445 3.37826C8.52305 2.95144 8.08477 2.59226 7.70963 2.82298C4.61694 4.72506 2.5 7.67911 2.5 11.5288C2.5 17.0357 6.96427 21.5 12.4712 21.5C16.1058 21.5 19.5149 19.4471 21.2204 16.2902C21.4366 15.89 20.9982 15.4631 20.562 15.5922C19.7328 15.8377 18.8423 15.9604 18.0108 15.9604Z"
					/>
				</svg>
			{/if}
			<!-- <label class="switch pointer-events-none">
				<input id="checkbox" type="checkbox" />
				<span class="slider round" />
			</label> -->
		</button>
	</div>
</section>

<style>
	/* .switch {
		position: relative;
		display: inline-block;
		width: 35px;
		height: 20px;
	} */

	/* Hide default HTML checkbox */
	/* .switch input {
		opacity: 0;
		width: 0;
		height: 0;
	} */

	/* The slider */
	/* .slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--accent);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 4px;
		bottom: 3px;
		background-color: var(--text);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: var(--accent-100);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(14px);
		-ms-transform: translateX(14px);
		transform: translateX(14px);
	} */

	/* Rounded sliders */
	/* .slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	} */
</style>
