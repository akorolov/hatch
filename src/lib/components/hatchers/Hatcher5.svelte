<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Bird from "$lib/components/Bird.svelte";
    import type { ModalSettings, ToastSettings } from '@skeletonlabs/skeleton';
    import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher5, LoveLevel, unlocked_eggs } from "$lib/stores/eggs";
	import { standard_password, unlocked_tabs } from "$lib/stores/status";
	import { gold_earned, gold_spent } from "$lib/stores/shop";

    $hatcher5.name = "Crow"

    const toastStore = getToastStore();
    const modalStore = getModalStore();

    const t: ToastSettings = {
        message: 'Crow has hatched!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };
    const t2: ToastSettings = {
        message: 'A new egg drops out of the sky!',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true
    };

    const no_money: ToastSettings = {
        message: "You don't have enough gold!",
        background: 'bg-error-500 text-white',
        hoverable: true,
    }

    const money_modal: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Egg',
        body: 'You see a little coin slot in the side of the egg. Looks like this one wants gold in order to hatch... What kind of bird could be inside?',
        buttonTextConfirm: "Pay 200 gold",
        
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => {
            if (r) {
                if (($gold_earned - $gold_spent) > 200 ) {
                    HatchEgg()
                } else {
                    toastStore.trigger(no_money)
                }
            }
            
        },
    };

    function HatchEgg() {
        $hatcher5.hatched = true
        $gold_spent += 200
        toastStore.trigger(t)
        toastStore.trigger(t2)
        $unlocked_eggs = [...$unlocked_eggs, "hatcher6"]
        $unlocked_tabs = [...$unlocked_tabs, "shop"]
    }

    function ClickEgg() {
        if (!$hatcher5.hatched) {
            modalStore.trigger(money_modal)
        }

    }

</script>

<div class="flex flex-col gap-0 m-2 items-center">
    <div class="container w-auto mb-2">
        {#if (!$hatcher5.hatched)}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span transition:fade={{ duration: 1000 }} on:click={ClickEgg}><Egg bind:count={$hatcher5.counter} shake="normal" image_src="/assets/Fantasy_Eggs/images/05.png" basic_clicker={false} /></span>
        {:else if $hatcher5.hatched}
            <span transition:fade={{ duration: 1000 }}><Bird bind:love={$hatcher5.love} image_src="/assets/birds/spritesheet_crow.png" /></span> 
        {/if}
    </div>

    {#if $hatcher5.hatched}
        <center>{$hatcher5.name}</center>
    {/if}
    {#if LoveLevel($hatcher5.love) > 0}
        <span>
            Love: {LoveLevel($hatcher5.love)}
        </span>
    {/if}

</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>