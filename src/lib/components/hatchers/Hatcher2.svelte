<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Creature from "$lib/components/Creature.svelte";
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher2 } from "$lib/stores/eggs";
	import { onMount } from "svelte";

    const toastStore = getToastStore();
    const t: ToastSettings = {
        message: 'Cardinal has hatched!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };

    let timeout: NodeJS.Timeout | undefined
    let hold = false

    $hatcher2.counter = -1

    function StartHold() {
        if (!$hatcher2.hatched) {
            hold = true
            timeout = setInterval(() => {console.log("interval trigger"); $hatcher2.counter += 1}, 1000)
        }
    }

    function EndHold() {
        hold = false
        clearInterval(timeout)
        $hatcher2.counter = -1
    }

    $: if (!$hatcher2.hatched && $hatcher2.counter == 10) {
        $hatcher2.hatched = true
        toastStore.trigger(t)
        clearInterval(timeout)
    }

</script>

<div class="flex flex-col gap-2 m-2 items-center">
    <div class="container w-auto">
        {#if (!$hatcher2.hatched)}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span transition:fade={{ duration: 1000 }} on:click={() => {console.log("click egg 2")}} on:mousedown={StartHold} on:mouseup={EndHold} ><Egg bind:count={$hatcher2.counter} shake="none" image_src="/assets/Fantasy_Eggs/images/02.png" /></span>
        {:else if $hatcher2.hatched}
            <span transition:fade={{ duration: 1000 }}><Creature image_src="/assets/birds/spritesheet_cardinal.png" /></span> 
        {/if}
    </div>

    {#if $hatcher2.counter >= 0 && !$hatcher2.hatched}
        {#key $hatcher2.counter}
            {$hatcher2.counter}
        {/key}
    {/if} 
    {#if $hatcher2.hatched}
        Cardinal
    {/if}

</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>