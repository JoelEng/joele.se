<script lang="ts">
	import { onMount } from 'svelte';

	// Kindly stolen from the Svelte REPL
	// based on suggestions from:
	// Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
	// On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
	// and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv

	export let label: string;
	export let label2: string | undefined = undefined;
	export let fontSize = 16;
	export let checked = true;
	let labelRef: HTMLElement, labelRef2: HTMLElement;

	onMount(() => {
		label.padStart(20, 'a');
		if (label2) {
			console.log(labelRef.clientWidth);
			const max = `${Math.max(labelRef.clientWidth, labelRef2.clientWidth)}px`;
			labelRef.style.width = max;
			labelRef2.style.width = max;
		}
	});

	const uniqueID = Math.floor(Math.random() * 100);

	function handleClick(e: any) {
		const target = e.target;

		const state = target.getAttribute('aria-checked');

		checked = state === 'true' ? false : true;
	}
</script>

<div class="slider" style="font-size:{fontSize}px">
	<p
		bind:this={labelRef}
		style:margin-right="0.5em"
		style:text-align="right"
		class:nonactive={(label2 && checked) || (!label2 && !checked)}
		id={`switch-${uniqueID}`}
	>
		{label}
	</p>
	<button
		role="switch"
		aria-checked={checked}
		aria-labelledby={`switch-${uniqueID}`}
		on:click={handleClick}
	/>
	{#if label2}
		<p bind:this={labelRef2} style:margin-left="0.5em" class:nonactive={!checked}>{label2}</p>
	{/if}
</div>

<style>
	/* Slider Design Option */

	p {
		color: var(--text);
		font-weight: 900;
		transform: all 0.3s;
		white-space: nowrap;
	}

	.nonactive {
		opacity: 0.5;
	}

	.slider {
		display: flex;
		align-items: center;
		--on: var(--primary);
		--switch-off: var(--primary-4);
		--toggle: var(--accent);
	}

	.slider button {
		width: 3.8em;
		height: 2em;
		position: relative;
		background: var(--switch-off);
		border: none;
		border: 2px solid var(--toggle);
		border-radius: 100px;
	}

	.slider button::before {
		content: '';
		position: absolute;
		width: 1.4em;
		height: 1.4em;
		background: var(--toggle);
		top: 0.2em;
		right: 1.9em;
		border-radius: 100px;
		transition: all 0.3s;
	}

	.slider button[aria-checked='true'] {
		background-color: var(--toggle);
	}

	.slider button[aria-checked='true']::before {
		transform: translateX(1.6em);
		background: var(--switch-off);
	}
</style>
