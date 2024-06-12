<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from './sidebar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="flex flex-col gap-2 border border-black m-2">
	<div class="flex flex-row gap-2 border border-red"> <h1 class="h1">Hatch the Egg</h1> </div>
	<div class="flex flex-row gap-2 border border-yellow">
		<Sidebar />
		<div class="flex flex-col gap-2 border-red">
			<slot />
		</div>
	</div>


</div>


