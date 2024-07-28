<script lang="ts">
	import { onMount } from "svelte";



    export let image_src = "/assets/birds/spritesheet_blue jay.png"
    export let count = 0
    export let clicker = false
    export let love = 0


    let canvas_element: HTMLCanvasElement   

    function LoadBird(x: number, y: number) {
        const image = new Image()
        image.onload = () => {
            canvas_element.getContext("2d")?.clearRect(0, 0, canvas_element.width, canvas_element.height)
            canvas_element.getContext("2d")?.drawImage(image, x, y, 16, 16, 0, 0, 16, 16)
        }
        image.src=image_src
    }

    onMount(() => {
        LoadBird(16,16)
        FlapWings()
    })

    function FlapWings() {
        LoadBird(32,16)
        love += 1
        setTimeout(() => {LoadBird(16,16)}, 130 + (Math.random() * 100))
    }

    function ClickCreature() {
        console.log("click")
        if (clicker) {
            count += 1
        }
    }

</script>

<canvas id="creature" class={(clicker) ? "cursor-pointer" : ""} width="16" height="16" bind:this={canvas_element} on:click={ClickCreature} on:mouseenter={FlapWings}>Creature</canvas>

<style>

canvas {
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
}

</style>