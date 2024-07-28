<script lang="ts">
	import { onMount } from "svelte";
    import { gold_earned } from "$lib/stores/shop";
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';

    const toastStore = getToastStore();
    const t: ToastSettings = {
	message: '+1 gold!',
	background: 'text-secondary-500',
	// Add your custom classes here:
	classes: 'border-0 bg-opacity-0',
    hideDismiss: true,
	timeout: 800,
};

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
    toastStore.trigger(t)
    console.log("Current gold: ", $gold_earned)
}

</script>

<div class="flex flex-col gap-4 items-center w-screen p-4">
    <span><h3 class="h3">Wishing Well</h3></span>
    <div class="flex flex-row gap-2 items-center justify-center">
        
        <center class="max-w-lg">Through the forest, down a small winding path overgrown with berry bushes, is a old wishing well. Perhaps you might find something inside?</center>
    </div>
    <canvas id="well" width="40" height="40" class="cursor-pointer" bind:this={well_element} on:click={ClickWell}>Well</canvas>

    
    

</div>



<style>

    canvas {
      width: 80px;
      height: 80px;
      image-rendering: pixelated;
    }

</style>