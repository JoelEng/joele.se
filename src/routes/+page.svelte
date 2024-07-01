<script>
	import Landing from '$lib/components/Landing/Landing.svelte';
	import ColorSwitch from '$lib/components/ColorSwitch/ColorSwitch.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Skills from '$lib/components/Skills/Skills.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
</script>

<svelte:head>
	<title>Joel</title>
</svelte:head>

<div class="body">
	<Landing />
	<ColorSwitch />

	<div class="contentContainer">
		<div class="content" id="content">
			<AboutMe />

			<h1>My Work & School Experience</h1>
			<h2>What I've been up to all these years</h2>
			<Timeline />

			<h1>My Skills</h1>
			<h2>A small taste of what I've learned along the way</h2>
			<Skills />

			<!-- <h1>I Don't Just Code</h1> -->
			<!-- <h2>I do other stuff as well</h2> -->
		</div>

		<Footer />
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		background: var(--background);
		overflow-y: hidden;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 360px;
		max-width: 90%;
		min-width: 60%;
		align-self: center;
	}

	.contentContainer {
		display: flex;
		flex-direction: column;
		position: relative;
		background: var(--background);
	}

	h1 {
		font-size: calc(30px + 1vw);
		margin-top: calc(2.4rem + 1.4vw);
		line-height: 1em;
	}

	h2 {
		font-size: calc(18px + 0.6vw);
		margin-top: calc(0.8rem + 0.2vw);
		margin-bottom: calc(1rem + 1vw);
		line-height: 1em;
	}
</style>
