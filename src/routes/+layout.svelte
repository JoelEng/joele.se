<script>
	import '../app.scss';
	import '../app.scss';
</script>

<svelte:head>
	<link rel="stylesheet" href={`global.css`} />
</svelte:head>

<slot />

<style>
	@font-face {
		font-family: 'Bogart';
		src: url('/fonts/bogart/bogart-semibold-webfont.woff2') format('woff2'),
			url('/fonts/bogart/bogart-semibold-webfont.woff') format('woff');
	}

	:global(html) {
		background: var(--primary);
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		transition: all 0.5s;
	}

	/* h1 and p are mapped to Bogart and a body font. Use these tags to avoid writing font-family all the time */
	:global(h1),
	:global(h2) {
		font-family: var(--font);
		color: var(--text);
		font-weight: normal;
	}

	/* this is needed to avoid a bug when changing theme on chrome */
	:global(p) {
		font-family: var(--font-body);
		color: var(--text-body);
	}
</style>
