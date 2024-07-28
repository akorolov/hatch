<script lang="ts">
	import type { HatcherInfo } from "$lib/stores/eggs";
	import { gold_earned, gold_spent, used_items } from "$lib/stores/shop";
    import { onMount } from "svelte";

    export let image_src = "/assets/Fantasy_Eggs/images/01.png"
    export let item_name: string
    export let love_amount: number
    export let cost = 0

    let canvas_element: HTMLCanvasElement

    onMount(() => {
        const image = new Image()
        image.onload = () => {
            canvas_element.getContext("2d")?.drawImage(image, 0, 0)
        }
        image.src=image_src
    })

    function PurchaseItem() {
        $gold_spent += cost
    }

    function UseItem(hatcher: HatcherInfo) {
        hatcher.love += love_amount
        $used_items = [...$used_items, item_name]
    }

    function ClickItem() {
        //need to open a small modal that lets you decide what you want to do with the item
    }

</script>

<canvas id="food" width="16" height="16" class="cursor-pointer" bind:this={canvas_element} on:click={ClickItem}>Egg</canvas>

<button class="btn variant-soft-primary {(($gold_earned + $gold_spent) >= cost) ? "disabled" : ""}">Purchase ({cost} gold)</button>