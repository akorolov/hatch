<script lang="ts">

	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { sidebar_on } from '$lib/stores/status';
	import Header from '$lib/components/header.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });



</script>

<div class="flex flex-col gap-2 border border-black m-2">
	<Header />
	<div class="flex flex-row gap-2 border border-yellow">
		{#if $sidebar_on}
			<Sidebar />
		{/if}
		<div class="flex flex-col gap-2 border-red">
			<slot />
		</div>
	</div>


</div>


