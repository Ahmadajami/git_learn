<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let arr = data.loading;
</script>

<h1>By Using this Route</h1>
<main>
	{#each arr as val}
		<h6>Loading{val}</h6>
	{/each}
	<h1>Finish Loading</h1>
</main>
