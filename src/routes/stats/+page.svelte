<script lang="ts">

import { unlocked_eggs } from "$lib/stores/eggs";

</script>

<div class="card flex flex-col">
    <span>Eggs unlocked: {$unlocked_eggs.length}/50</span>
</div>