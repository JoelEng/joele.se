<script>
	import Palette from '$lib/svg/Palette.svelte';
	import LayerButton from '$lib/components/LayerButton.svelte';
	import { fly } from 'svelte/transition';
	import ColorButton from './ColorButton.svelte';
	import clickOutside from '$lib/functions/clickOutside';

	let showPicker = true;
</script>

<div class="body">
	<Palette on:click={() => (showPicker = !showPicker)} />

	{#if showPicker}
		<div
			class="picker"
			transition:fly={{ x: 400, opacity: 1 }}
			use:clickOutside
			on:click_outside={() => (showPicker = false)}
		>
			<LayerButton borderRadius="10px" background="var(--primary-4)">
				<div class="content">
					<ColorButton name="garden" background="#b7d6ad" color="#437978" />
					<ColorButton name="sky" background="#add3d6" color="#435b79" />
					<!-- <ColorButton name="bees" background="#fed766" color="#1d2e35" /> -->
					<ColorButton name="space" background="#191C23" color="#f5f8ff" />
					<ColorButton name="ocean" background="#5e60ce" color="#72efdd" />
					<!-- <ColorButton name="new-pink" background="#ffb7ef" color="#854ca7" /> -->
					<!-- <ColorButton name="testing" /> -->
				</div>
			</LayerButton>
		</div>
	{/if}
</div>

<style>
	.body {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		margin: 0;
	}

	.picker {
		position: absolute;
		right: 1rem; /*TODO Needs to be changed*/
		top: 0.6rem;
	}

	.content {
		display: flex;
		padding: 0.5rem;
	}
</style>
