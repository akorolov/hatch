<script>
	import { unlocked_eggs } from "$lib/stores/eggs";
	import Hatcher1 from "$lib/components/hatchers/Hatcher1.svelte";
	import Hatcher2 from "$lib/components/hatchers/Hatcher2.svelte";
	import Hatcher3 from "$lib/components/hatchers/Hatcher3.svelte";
	import Hatcher4 from "$lib/components/hatchers/Hatcher4.svelte";
	import Hatcher5 from "$lib/components/hatchers/Hatcher5.svelte";


</script>

<div class="m-4 flex flex-row gap-2">

	{#if $unlocked_eggs.includes("hatcher1")}
		<Hatcher1 />
	{/if}
	{#if $unlocked_eggs.includes("hatcher2")}
		<Hatcher2 />
	{/if}
	{#if $unlocked_eggs.includes("hatcher3")}
		<Hatcher3 />
	{/if}
	{#if $unlocked_eggs.includes("hatcher4")}
		<Hatcher4 />
	{/if}
	{#if $unlocked_eggs.includes("hatcher5")}
		<Hatcher5 />
	{/if}

</div>