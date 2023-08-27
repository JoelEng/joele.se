<script>
	import ArrowUp from '$lib/svg/ArrowUp.svelte';
	import NewWavesBottom from '$lib/svg/WavesBottom.svelte';
	import Topography from '$lib/svg/Topography.svelte';
	import { scrollTop } from 'svelte-scrolling';

	let hovered = false;
</script>

<div style:color={hovered ? 'var(--text-highlight)' : 'var(--text)'}>
	<Topography />
	<NewWavesBottom />
	<h1
		on:click={() => scrollTop()}
		on:mouseover={() => (hovered = true)}
		on:focus={() => (hovered = true)}
		on:mouseout={() => (hovered = false)}
		on:blur={() => (hovered = false)}
	>
		nowhere to go but up
		<ArrowUp />
	</h1>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		background: var(--primary);
	}

	h1 {
		font-size: 1.5rem;
		text-align: center;
		font-weight: 900;
		margin-bottom: 2.4rem;
		width: fit-content;
		cursor: pointer;
		position: relative;
	}
</style>
