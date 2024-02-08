<script>
    import { onMount } from "svelte";
    var textString = `-- Initiating Kernel and other important things --,

Progress: |---------------------------| 45.0% Complete,
.........,
Progress: |█████----------------------| 55.0% Complete,
.......,
Progress: |███████████████------------| 70.0% Complete,
.....,
Progress: |████████████████████-------| 88.0% Complete,
....,
Progress: |███████████████████████████| 100.0% Complete,
...,
----- COMPLETED-----                 
`;
    var speed = 1; /* The speed/duration of the effect in milliseconds */
    var texts = textString.split(',');

    onMount(() => {
        var container = document.getElementById('container');

        function typeWriter(textIndex) {
            var i = 0;
            var txt = texts[textIndex];
            var p = document.createElement('p');

            function type() {
                if (i < txt.length) {
                    p.innerHTML += txt.charAt(i);
                    i++;
                    container.scrollTop = container.scrollHeight;
                    setTimeout(type, speed);
                } else {
                    // Move to the next text after typing completes
                    textIndex++;
                    if (textIndex < texts.length) {
                        // Create a new <p> element for the next text
                        p = document.createElement('p');
                        container.appendChild(p);

                        // Start typing the next text
                        typeWriter(textIndex);
                    }
                }
            }

            // Append the <p> element to the container
            container.appendChild(p);

            // Start typing the text
            type();
        }

        // Start typing the first text
        typeWriter(0);
    })
</script>

<div id="container" class="text-white overflow-auto h-[50%] max-w-[550px] bg-[#151515] border-[#151515] border-[16px] rounded-3xl px-4"></div>
