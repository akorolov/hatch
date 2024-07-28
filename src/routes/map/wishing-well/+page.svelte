<script lang="ts">
	import { onMount } from "svelte";
    import { gold_earned } from "$lib/stores/shop";
    import type { ModalSettings, ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore, getModalStore } from '@skeletonlabs/skeleton';
	import { standard_password, well_unlocked } from "$lib/stores/status";
			
    const modalStore = getModalStore();

    const toastStore = getToastStore();
    const t: ToastSettings = {
        message: '+1 gold!',
        background: 'text-secondary-500',
        // Add your custom classes here:
        classes: 'border-0 bg-opacity-0',
        hideDismiss: true,
        timeout: 800,
    };

    const bad_pass: ToastSettings = {
        message: "That password didn't work.",
        background: 'bg-error-500 text-white',
        hoverable: true,
    }
    const good_pass: ToastSettings = {
        message: "The well unlocks!",
        background: 'bg-success-500 text-white',
        hoverable: true,
    }

    const password_modal: ModalSettings = {
        type: 'prompt',
        // Data
        title: 'Wishing well',
        body: 'The wishing well is boarded up, and locked with an arcane lock, like the kind they use up at the wizard tower. It needs a password. Perhaps there is some kind of standard password you could try?',
        // Populates the input value and attributes
        value: '',
        valueAttr: { type: 'text', minlength: 1, maxlength: 100, required: true },
        // Returns the updated response value
        response: (r: string) => {
            if (r == standard_password) {
                $well_unlocked = true
                toastStore.trigger(good_pass)
            } else {
                toastStore.trigger(bad_pass)
            }
        },
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
    if ($well_unlocked) {
        $gold_earned += 1
        toastStore.trigger(t)
        console.log("Current gold: ", $gold_earned)
    } else {
        modalStore.trigger(password_modal)
    }
    
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