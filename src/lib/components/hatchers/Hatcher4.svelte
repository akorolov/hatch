<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Bird from "$lib/components/Bird.svelte";
    import type { ModalSettings, ToastSettings } from '@skeletonlabs/skeleton';
    import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher4, LoveLevel, unlocked_eggs } from "$lib/stores/eggs";
	import { standard_password } from "$lib/stores/status";

    $hatcher4.name = "Chickadee"

    const toastStore = getToastStore();
    const modalStore = getModalStore();

    const t: ToastSettings = {
        message: 'Chickadee has hatched!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };
    const t2: ToastSettings = {
        message: 'A new egg rolls over to you!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };

    const bad_pass: ToastSettings = {
        message: "That password didn't work.",
        background: 'bg-error-500 text-white',
        hoverable: true,
    }

    const password_modal: ModalSettings = {
        type: 'prompt',
        // Data
        title: 'Egg',
        body: "This egg seems to be expecting something from you. Almost like a password. Maybe there's some kind of standard password you can find?",
        // Populates the input value and attributes
        value: '',
        valueAttr: { type: 'text', minlength: 1, maxlength: 100, required: true },
        // Returns the updated response value
        response: (r: string) => {
            if (r == standard_password) {
                HatchEgg()
            } else {
                toastStore.trigger(bad_pass)
            }
        },
    };

    function HatchEgg() {
        $hatcher4.hatched = true
        toastStore.trigger(t)
        toastStore.trigger(t2)
        $unlocked_eggs = [...$unlocked_eggs, "hatcher5"]
    }

    function ClickEgg() {
        if (!$hatcher4.hatched) {
            modalStore.trigger(password_modal)
        }

    }

</script>

<div class="flex flex-col gap-0 m-2 items-center">
    <div class="container w-auto mb-2">
        {#if (!$hatcher4.hatched)}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span transition:fade={{ duration: 1000 }} on:click={ClickEgg}><Egg bind:count={$hatcher4.counter} shake="normal" image_src="/assets/Fantasy_Eggs/images/04.png" basic_clicker={false} /></span>
        {:else if $hatcher4.hatched}
            <span transition:fade={{ duration: 1000 }}><Bird bind:love={$hatcher4.love} image_src="/assets/birds/spritesheet_chickadee.png" /></span> 
        {/if}
    </div>

    {#if $hatcher4.hatched}
        <center>Chickadee</center>
    {:else}
        <span class="text-surface-50 cursor-default">5TandARdPA55w0rd</span>
    {/if}
    {#if LoveLevel($hatcher4.love) > 0}
        <span>
            Love: {LoveLevel($hatcher4.love)}
        </span>
    {/if}

</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>