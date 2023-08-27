<script lang="ts">
	export let name: string;
</script>

<div>
	<slot name="img" />
	<p>
		<span class="title">{name}</span> -
		<span><slot /></span>
	</p>
</div>

<style>
	div {
		text-align: left;
		line-height: 1.4rem;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.title {
		font-family: var(--font);
		color: var(--text);
		font-weight: 900;
	}
</style>
