<script lang="ts">

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { unlocked_tabs } from '$lib/stores/status';
	import { ClearStores } from '$lib/stores/settings';
	import { gold_earned, gold_spent } from '$lib/stores/shop';



</script>

<div class="flex flex-col items-center gap-2 m-2"> 
		<span><h1 class="h1">Hatch the Egg</h1> </span>
		
	{#if $gold_earned > 0}
	<div class="flex flex-row items-center gap-2">
		<span>Gold: {$gold_earned - $gold_spent}</span>
	</div>
	{/if}

	<TabGroup padding="px-3" hover="hover:variant-soft-secondary">
		{#if $unlocked_tabs.length > 0}
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>Eggs</TabAnchor>
		{/if}
		{#if $unlocked_tabs.includes("map")}
			<TabAnchor href="/map" selected={$page.url.pathname === '/map'}>Map</TabAnchor>
		{/if}
		{#if $unlocked_tabs.includes("stats")}
			<TabAnchor href="/stats" selected={$page.url.pathname === '/stats'}>Stats</TabAnchor>
		{/if}

		<TabAnchor href="/test1" selected={$page.url.pathname === '/test1'}>Test1</TabAnchor>
		<button on:click={ClearStores}>Clear stores</button>

	</TabGroup>
	
						
</div>



