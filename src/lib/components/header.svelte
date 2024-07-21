<script lang="ts">

import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';
import { unlocked_tabs } from '$lib/stores/status';
	import { ClearStores } from '$lib/stores/settings';



</script>

<div class="flex flex-col items-center gap-2 m-2"> 
	<h1 class="h1">Hatch the Egg</h1> 

	<TabGroup padding="px-3 py-1" hover="hover:variant-soft-secondary">
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
		<TabAnchor href="/test1" selected={$page.url.pathname === '/test1'}>Test1</TabAnchor>
		<button on:click={ClearStores} class="btn">Clear stores</button>
	</TabGroup>
						
</div>

