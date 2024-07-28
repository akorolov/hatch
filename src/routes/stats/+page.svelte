<script lang="ts">

import { unlocked_eggs } from "$lib/stores/eggs";

</script>

<div class="m-2 p-2 flex flex-col align-center w-full">
    <span>Eggs identified: {$unlocked_eggs.length}/50</span>
    <span>Eggs hatched: {null}/50</span>
</div>