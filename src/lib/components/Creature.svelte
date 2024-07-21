<script lang="ts">
	import { onMount } from "svelte";



    export let image_src = "/assets/birds/spritesheet_blue jay.png"
    export let count = 0


    let canvas_element: HTMLCanvasElement   

    onMount(() => {
        const image = new Image()
        image.onload = () => {
            canvas_element.getContext("2d")?.drawImage(image, 32, 16, 16, 16, 0, 0, 16, 16)
        }
        image.src=image_src
    })

</script>

<canvas id="creature" width="16" height="16" bind:this={canvas_element}>Creature</canvas>

<style>

canvas {
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
}

</style>