<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Bird from "$lib/components/Bird.svelte";
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher1, unlocked_eggs, LoveLevel } from "$lib/stores/eggs";
	import { unlocked_tabs } from "$lib/stores/status";

    $hatcher1.name = "Blue Jay"

    const toastStore = getToastStore();
    const t: ToastSettings = {
        message: 'Blue Jay has hatched!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };
    const t2: ToastSettings = {
        message: 'Blue Jay has brought you an egg!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };

    function Hatch() {
        toastStore.trigger(t)
        toastStore.trigger(t2)
        $hatcher1.counter += 1
        $unlocked_eggs = [...$unlocked_eggs, "hatcher2"]
        $hatcher1.hatched = true
        console.log($unlocked_eggs)
        $unlocked_tabs = [...$unlocked_tabs, "stats"]
    }

    $: $hatcher1.counter, ($hatcher1.counter == 10) ? Hatch() : null;


</script>

<div class="flex flex-col gap-0 m-2 items-center">
    <div class="container w-auto mb-2">
        {#if $hatcher1.counter < 10}
            <span transition:fade={{ duration: 1000 }}><Egg bind:count={$hatcher1.counter} shake="normal" image_src="/assets/Fantasy_Eggs/images/01.png" /></span>
        {:else}
            <span transition:fade={{ duration: 1000 }}><Bird bind:love={$hatcher1.love} /></span>
        {/if}
    </div>

    {#if $hatcher1.counter > 0 && $hatcher1.counter < 10}
        {#key $hatcher1.counter}
            {$hatcher1.counter}
        {/key}
    {/if}
    {#if $hatcher1.hatched}
        <span>Blue Jay</span>
    {/if}
    {#if LoveLevel($hatcher1.love) > 0}
        <span>
            Love: {LoveLevel($hatcher1.love)}
        </span>
    {/if}
</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>