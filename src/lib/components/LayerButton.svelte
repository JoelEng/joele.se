<script>
	export let background = 'var(--background)';
	export let offset = '3px';
	export let borderRadius = '1000px';
	let hovered = false;

	function handleOver() {
		hovered = true;
	}

	function handleOut() {
		hovered = false;
	}
</script>

<div
	class="offsetButton"
	on:mouseover={handleOver}
	on:focus={handleOver}
	on:mouseout={handleOut}
	on:blur={handleOut}
	style:border-radius={borderRadius}
>
	<div
		class="background"
		style:transform={!hovered ? `translate(${offset}, ${offset})` : null}
		style:background
	/>
	<div class="foreground" style:transform={!hovered ? `translate(-${offset}, -${offset})` : null} />
	<div class="slot">
		<slot />
	</div>
</div>

<style lang="scss">
	.offsetButton {
		display: flex;
		position: relative;
		background: none;
		border: none;
		transition: all 0.5s, transform 0.1s;
		width: fit-content;
		height: fit-content;
		color: var(--text);
	}

	.slot {
		z-index: 1;
	}

	.foreground,
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		transition: inherit;
	}

	.foreground {
		box-sizing: border-box;
		background: none;
		color: var(--text);
		border: 3px solid var(--text);
	}
</style>
