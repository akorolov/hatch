<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Bird from "$lib/components/Bird.svelte";
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher3, LoveLevel, unlocked_eggs } from "$lib/stores/eggs";
	import { unlocked_tabs } from "$lib/stores/status";

    const toastStore = getToastStore();
    const t: ToastSettings = {
        message: 'Cedar Waxwing has hatched!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };

    let timeout: NodeJS.Timeout | undefined
    let seconds = 0

    $hatcher3.counter = -1

    function StartHold() {
        if (!$hatcher3.hatched) {
            timeout = setInterval(() => {console.log("interval trigger"); seconds += 1}, 100)
        }
    }

    $: if (seconds == 11) {
        $hatcher3.counter += 1
    }

    function EndHold() {
        clearInterval(timeout)
        seconds = 0
    }

    $: if (!$hatcher3.hatched && $hatcher3.counter == 10) {
        $hatcher3.hatched = true
        toastStore.trigger(t)
        clearInterval(timeout)
        $unlocked_eggs = [...$unlocked_eggs, "hatcher3"]
        $unlocked_tabs = [...$unlocked_tabs, "map"]
    }

</script>

<div class="flex flex-col gap-2 m-2 items-center">
    <div class="container w-auto">
        {#if (!$hatcher3.hatched)}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span transition:fade={{ duration: 1000 }} on:mousedown={StartHold} on:mouseup={EndHold} ><Egg bind:count={$hatcher3.counter} shake="none" image_src="/assets/Fantasy_Eggs/images/03.png" basic_clicker={false} /></span>
        {:else if $hatcher3.hatched}
            <span transition:fade={{ duration: 1000 }}><Bird bind:love={$hatcher3.love} image_src="/assets/birds/spritesheet_cedar waxwing.png" /></span> 
        {/if}
    </div>

    {#if $hatcher3.counter >= 0 && !$hatcher3.hatched}
        {#key $hatcher3.counter}
            {$hatcher3.counter}
        {/key}
    {/if} 
    {#if $hatcher3.hatched}
        <center>Cedar<br>Waxwing</center>
    {/if}
    {#if LoveLevel($hatcher3.love) > 0}
        <span>
            Love: {LoveLevel($hatcher3.love)}
        </span>
    {/if}

</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>