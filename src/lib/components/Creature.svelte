<script lang="ts">
	import { onMount } from "svelte";



    export let image_src = "/assets/birds/spritesheet_blue jay.png"
    export let count = 0
    export let clicker = false


    let canvas_element: HTMLCanvasElement   

    onMount(() => {
        const image = new Image()
        image.onload = () => {
            canvas_element.getContext("2d")?.drawImage(image, 16, 48, 16, 16, 0, 0, 16, 16)
        }
        image.src=image_src
    })

    function ClickCreature() {
        if (clicker) {
            count += 1
        }
    }

</script>

<canvas id="creature" class={(clicker) ? "cursor-pointer" : ""} width="16" height="16" bind:this={canvas_element} on:click={ClickCreature}>Creature</canvas>

<style>

canvas {
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
}

</style>