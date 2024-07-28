<script lang="ts">
	import { unlocked_shop } from "$lib/stores/shop";



</script>

<div class="m-4 flex flex-row gap-2">

    {#if $unlocked_shop.includes("sunglasses")}
        sunglasses
    {/if}
    
    {#if $unlocked_shop.includes("map")}
        map scroll
    {/if}
    {#if $unlocked_shop.includes("key")}
        key
    {/if}
    {#if $unlocked_shop.includes("time machine")}
        time machine
    {/if}
    {#if $unlocked_shop.includes("clicker")}
        egg clicker
    {/if}
    {#if $unlocked_shop.includes("pickaxe")}
        pickaxe
    {/if}
    {#if $unlocked_shop.includes("berry1")}
        berry1
    {/if}
    {#if $unlocked_shop.includes("berry2")}
        berry2
    {/if}
    {#if $unlocked_shop.includes("berry3")}
        berry3
    {/if}
    {#if $unlocked_shop.includes("berry4")}
        berry4
    {/if}


</div>