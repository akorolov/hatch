<script lang="ts">
	import { onMount } from "svelte";
    import { createAnimationTriggerAction } from 'svelte-trigger-action'

    const { triggerAnimation, animationAction } = createAnimationTriggerAction()

    export let image_src = "/assets/Fantasy_Eggs/images/01.png"
    export let count = 0
    export let basic_clicker = true

    let canvas_element: HTMLCanvasElement

    onMount(() => {
        const image = new Image()
        image.onload = () => {
            canvas_element.getContext("2d")?.drawImage(image, 0, 0)
        }
        image.src=image_src
    })


    export let shake: "hard" | "normal" | "soft" | "none" = "soft"

    function ClickEgg() {
        switch (shake) {
            case "hard":
                triggerAnimation('hard_shake')
                break;
            case "soft":
                triggerAnimation('soft_shake')
                break;
            case "none":
                break;
            default:
                triggerAnimation('shake')
                break;
        }
        if (basic_clicker) count+=1;
    }


</script>

<canvas id="eggers" width="16" height="16" class="cursor-pointer" bind:this={canvas_element} use:animationAction on:click={ClickEgg}>Egg</canvas>


<style>

canvas {
  width: 80px;
  height: 80px;
  image-rendering: pixelated;
}

:global(.shake) {
    animation: shake 0.64s ease-in both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

:global(.soft_shake) {
  animation: soft_shake 0.84s ease-in both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

:global(.hard_shake) {
  animation: hard_shake 0.44s ease-in both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}



@keyframes soft_shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
}


@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}


@keyframes hard_shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
}

</style>