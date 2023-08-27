<script>
	export let side = 'full';
	export let clientWidth = 0;
	export let title = '';

	let lineWidth = 8;
	let lineStyle = 'dashed';
	let offset = lineWidth / 2;

	const originalSide = side;
	$: side = clientWidth < 600 ? 'full' : originalSide;

	$: bulletTranslate =
		side === 'left'
			? `translate(calc(50% + ${offset}px), -10%)`
			: `translate(calc(-50% - ${offset}px), -10%)`;

	let titleStyle = '';
	$: {
		switch (side) {
			case 'left':
				titleStyle = `transform: translate(calc(100% + ${lineWidth}px), 0); right: 0;`;
				break;
			case 'right':
				titleStyle = `transform: translate(calc(-100% - ${lineWidth}px), 0);`;
				break;
			default:
				titleStyle = 'position: relative;';
		}
	}

	let borderStyle = '';
	$: {
		switch (side) {
			case 'left':
				borderStyle = `border-right-width: ${lineWidth}px; border-right-style: ${lineStyle};`;
				break;
			default:
				borderStyle = `border-left-width: ${lineWidth}px; border-left-style: ${lineStyle};`;
		}
	}
</script>

<div class={`item ${side}`} style={borderStyle}>
	<div class={`bullet${side}`} style:transform={bulletTranslate}>
		<slot name="icon" />
	</div>
	<h1 style={titleStyle}>
		{title}
	</h1>
	<slot />
</div>

<style>
	.item {
		width: calc(50% + 4px);
		display: flex;
		flex-direction: column;
		position: relative;
		text-align: left;
		border-color: var(--text);
	}

	.left {
		align-self: flex-start;
		align-items: flex-end;
		text-align: right;
	}

	.right {
		align-self: flex-end;
	}

	.full {
		width: 96%;
		align-self: center;
	}

	.bulletleft,
	.bulletright,
	.bulletfull {
		width: 3rem;
		height: 3rem;
		border-radius: 1000px;
		position: absolute;
		background: var(--text);
	}

	.bulletleft {
		top: 0;
		right: 0;
	}

	h1 {
		position: absolute;
		width: fit-content;
		top: 0;
		padding: 8px 40px 8px 40px;
		font-size: 1.2rem;
		font-weight: 900;
	}
</style>
