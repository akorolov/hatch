<script lang="ts">

import { unlocked_eggs } from "$lib/stores/eggs";
	import { gold_earned, gold_spent } from "$lib/stores/shop";

</script>

<div class="m-2 p-2 flex flex-col items-center w-screen">
    <span>Eggs identified: {$unlocked_eggs.length}/50</span>
    <span>Eggs hatched: {null}/50</span>
    {#if $gold_earned > 0}
        <span>Gold earned: {$gold_earned}</span>
    {/if}
    {#if $gold_spent > 0}
        <span>Gold spent: {$gold_spent}</span>
    {/if}

</div>