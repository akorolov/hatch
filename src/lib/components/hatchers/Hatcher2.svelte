<script lang="ts">
	import Egg from "$lib/components/Egg.svelte";
	import Creature from "$lib/components/Creature.svelte";
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';
    import { fade } from "svelte/transition";
    import { hatcher2 } from "$lib/stores/eggs";
	import { onMount } from "svelte";


</script>

<div class="flex flex-col gap-2 m-2 items-center">
    <div class="container w-auto">
            <span transition:fade={{ duration: 500 }}><Egg bind:count={$hatcher2.counter} shake="normal" image_src="/assets/Fantasy_Eggs/images/02.png" /></span>
    </div>

</div>

<style>

    .container { display: grid; }
    .container > * { grid-area: 1 / 1; }

</style>