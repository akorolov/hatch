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

function ClickWell() {
    $gold_earned += 1
    console.log("Current gold: ", $gold_earned)
}

</script>



This is the map <br><br>

<canvas id="well" width="40" height="40" class="cursor-pointer" bind:this={well_element} on:click={ClickWell}>Well</canvas>


<style>

    canvas {
      width: 80px;
      height: 80px;
      image-rendering: pixelated;
    }

</style>