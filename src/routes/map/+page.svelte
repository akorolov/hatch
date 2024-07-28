<script lang="ts">
	import { onMount } from "svelte";
    import { gold_earned } from "$lib/stores/shop";


let well_element: HTMLCanvasElement
let well_img = "/assets/locations/Well.png"

onMount(() => {
        const image = new Image()
        image.onload = () => {
            well_element.getContext("2d")?.drawImage(image, 0, 0)
        }
        image.src=well_img
    })

</script>

<div class="flex flex-col gap-4 items-center w-screen p-4">
    <span><h2 class="h2">Map</h2></span>
    <a href="/map/wishing-well">
        <div class="flex flex-row gap-2 items-center justify-center">
            <canvas id="well" width="40" height="40" class="cursor-pointer" bind:this={well_element}>Well</canvas>
            <span>Wishing Well</span>
        </div>
    </a>

    
    

</div>



<style>

    canvas {
      width: 80px;
      height: 80px;
      image-rendering: pixelated;
    }

</style>