<script lang="ts">

    import { Engine, Actor, Color } from 'excalibur';
	import { onMount } from 'svelte';

    let game: Engine;
    let paddle: Actor;
    

    onMount(() => {

        game = new Engine({
            canvasElementId: 'game',
            width: 400,
            height: 300,
        });

        game.start();

        paddle = new Actor({
            x: 150,
            y: game.drawHeight - 40,
            width: 200,
            height: 20,
            // Let's give it some color with one of the predefined
            // color constants
            color: Color.Chartreuse,
        });
    })

    
    
    function TestButton() {
        console.log("test")
        if (paddle.isInitialized && !paddle.isKilled()) {
            paddle.kill()
        } else {
            game.add(paddle);
        }
    }

</script>

<canvas id="game"></canvas>

<br><br>

<button class="btn variant-filled-primary" on:click={TestButton}>Test</button>