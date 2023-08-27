<script>
	import GitHub from '$lib/svg/Github.svelte';
	import LinkedIn from '$lib/svg/LinkedIn.svelte';
	import Mail from '$lib/svg/Mail.svelte';
	import Chevron from '$lib/svg/Chevron.svelte';
	import LayerButton from '../LayerButton.svelte';
	import { scrollTo } from 'svelte-scrolling';
</script>

<div class="container">
	<div class="buttonContainer">
		<a href="https://github.com/JoelEng" target="_blank" rel="noopener noreferrer">
			<GitHub />
		</a>
		<a
			href="https://linkedin.com/in/joel-engström-b341141aa"
			target="_blank"
			rel="noopener noreferrer"
		>
			<LinkedIn />
		</a>
		<a href="mailto: joel.n.engstrom@protonmail.com" target="_blank" rel="noopener noreferrer">
			<Mail />
		</a>
	</div>
	<a class="resume" href="CV.pdf" download>
		<LayerButton offset="3px">
			<h1>View My Resume</h1>
		</LayerButton>
	</a>
	<div use:scrollTo={{ ref: 'content', offset: -40 }} on:click={() => console.log('Test')}>
		<Chevron />
	</div>
</div>

<style>
	.container {
		position: absolute;
		bottom: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.buttonContainer {
		height: fit-content;
		display: flex;
		padding: 0;
		margin: 0 0 10px 0;
		gap: 24px;
	}

	h1 {
		white-space: nowrap;
		padding: 12px 18px 12px 18px;
		font-size: 1.3rem;
	}

	.resume {
		text-decoration: none;
	}
</style>
