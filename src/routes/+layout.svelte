<script lang="ts">

	import '../app.postcss';
	import { GetLoveMessage } from '$lib/stores/loop';
	

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/sidebar.svelte';
	import { sidebar_on } from '$lib/stores/status';
	import Header from '$lib/components/header.svelte';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { hatcher1, hatcher2, hatcher3, unlocked_eggs } from '$lib/stores/eggs';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { getToastStore } from '@skeletonlabs/skeleton';
	import { gold_earned } from '$lib/stores/shop';

	let hatchers = [$hatcher1, $hatcher2, $hatcher3]

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    const toastStore = getToastStore();
    const t: ToastSettings = {
        message: '',
        background: 'variant-soft-primary',
        timeout: 5000,
        hoverable: true,
		hideDismiss: true,
    };

	

	function GameLoop() {
		EarnGold()
		SpendGold()
		CheckLove()
	}

	function EarnGold() {
		// add in things that would earn hold here
	}

	function SpendGold() {
		// add in anything where gold is spent here
	}

	function CheckLove() {
		let threshold = 100000
		let gold = 10
		for (let egg of hatchers) {
			if (egg.hatched) {
				if (Math.random() * threshold < egg.love) {
					t.message = egg.name + " " + GetLoveMessage()
					if (t.message.includes("gold")) {
						$gold_earned += gold
					}
					console.log(t.message)
					toastStore.trigger(t)
				}
			}
			threshold += 100000
			gold += 10
		}
	}

	onMount(() => {
		setInterval(GameLoop, 1000)
	})

</script>

<Toast position="br" max={5} transitionOut={fade} shadow="" />

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


