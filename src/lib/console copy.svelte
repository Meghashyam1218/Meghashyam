<script>
	import { onMount } from 'svelte';
    var textString = `-- Initiating Kernel and other important things --
Linux version 5.15.0-48-generic (buildd@lcy02-amd64-043) (gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0, GNU ld (GNU Binutils for Ubuntu) 2.34) #54~20.04.1-Ubuntu SMP Thu Sep 1 16:17:26 UTC 2022 (Ubuntu 5.15.0-48.54~20.04.1-generic 5.15.53)
Command line: BOOT_IMAGE=/vmlinuz-5.15.0-48-generic root=/dev/mapper/vgubuntu-root ro quiet splash vt.handoff=7
KERNEL supported cpus:
  Intel GenuineIntel
  AMD AuthenticAMD
  Hygon HygonGenuine
  Centaur CentaurHauls
  zhaoxin   Shanghai  
x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'
x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'
x86/fpu: Supporting XSAVE feature 0x004: 'AVX registers'
x86/fpu: Supporting XSAVE feature 0x008: 'MPX bounds registers'
x86/fpu: Supporting XSAVE feature 0x010: 'MPX CSR'
x86/fpu: xstate_offset[2]:  576, xstate_sizes[2]:  256
x86/fpu: xstate_offset[3]:  832, xstate_sizes[3]:   64
x86/fpu: xstate_offset[4]:  896, xstate_sizes[4]:   64
x86/fpu: Enabled xstate features 0x1f, context size is 960 bytes, using 'compacted' format.
signal: max sigframe size: 2032
...........
Progress: |███████████████████████---------------------------| 45.0% Complete
.........
Progress: |████████████████████████████----------------------| 55.0% Complete
.......
Progress: |██████████████████████████████████████------------| 70.0% Complete
.....
Progress: |███████████████████████████████████████████-------| 88.0% Complete
....
Progress: |██████████████████████████████████████████████████| 100.0% Complete
...
----- COMPLETED-----                 
`;
	onMount(() => {
		
			const textArray = textString.split(' ');
			const textElem = document.querySelector('.hacking-animation__text');
			let count = 0;

			
                if (count<textArray.length){
                interval = setInterval(() => {
				if (textArray[count] === '\n') {
					textElem.insertAdjacentHTML('beforeend', '<br>');
				} else {
					const span = document.createElement('span');
					span.className = 'hacking-animation__character';
					span.textContent = textArray[count];
					textElem.appendChild(span);
				}

				count++;
				if (count === textArray.length) {
					clearInterval(interval)
				}
			}, 20);
        }
            
		
	});
</script>

<div class="hacking-animation">
	<pre class="hacking-animation__text" />
</div>

<style>
	.hacking-animation {
        overflow: hidden;
        position: relative;
		background: #151515;
		color: #eee;
		height: 50%;
	}

	.hacking-animation__text {
		bottom: 0;
		font-family: 'Share Tech Mono', monospace;
		color: #eee;
		font-size: 18px;
		left: 0;
		line-height: 1.5rem;
		padding: 2rem;
		position: absolute;
		right: 0;
	}

	.hacking-animation__character {
		animation: type 1s linear;
		color: #45aae7;
	}

	@keyframes type {
		0% {
			background: #fff;
			color: #eee;
		}

		5% {
			background: transparent;
			color: #fff;
		}

		100% {
			background: transparent;
			color: #45aae7;
		}
	}
</style>
