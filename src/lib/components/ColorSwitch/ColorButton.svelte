<script>
	export let name = '';
	export let background = 'white';
	export let color = 'black';

	function handleClick() {
		document.documentElement.setAttribute('data-theme', name);
	}
</script>

<div class="background" style:background on:click={handleClick}>
	<div class="color" style:background={color} />
</div>

<style>
	.background {
		position: relative;
		margin: 0.5rem;
		border-width: 0;
		width: 2rem;
		height: 2rem;
		border-radius: 100px;
		border-bottom-right-radius: 50px;
		cursor: pointer;
	}

	.color {
		width: 1rem;
		height: 1rem;
		border-radius: 100px;
		border-bottom-right-radius: 60px;
		position: absolute;
		bottom: 3px;
		right: 3px;
	}
</style>
