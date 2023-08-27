<script>
	import WavesTop from '$lib/svg/WavesTop.svelte';
	import Topography from '$lib/svg/Topography.svelte';
	import Chevron from './Chevron.svelte';
</script>

<div class="landingContainer">
	<div class="landing">
		<Topography />
		<div class="nameAndProfile">
			<!-- <img src="/profile.png" alt="Me!" width={220} height={220} /> -->
			<h1 class="text">Computer scientist and web developer</h1>
			<div class="fullname">
				<h1 class="name">Joel</h1>
				<h1 class="lastname">Engström</h1>
			</div>
		</div>
		<Chevron />
	</div>
	<div class="emptyContainer" />
	<WavesTop />
</div>

<style>
	.landing {
		display: flex;
		flex-direction: row;
		position: fixed;
		justify-content: center;
		align-items: flex-start;
		padding-top: 20vh;
		height: 100vh;
		flex-wrap: wrap;
		transition: all 0s;
		width: 100%;
	}

	.emptyContainer {
		height: 100vh;
	}

	.landingContainer {
		background-color: var(--primary);
		position: relative;
	}

	.nameAndProfile {
		display: flex;
		flex-direction: column;
		max-width: 95%;
		z-index: 1;
	}

	.fullname {
		display: flex;
		gap: 5rem;
	}

	.fullname > h1 {
		line-height: 1em;
		text-align: center;
	}

	.name {
		font-size: calc(8.6vw + 2.4rem);
	}

	.lastname {
		font-size: calc(8.6vw + 2.4rem);
	}

	.text {
		font-size: calc(1.2rem + 1vw);
		line-height: 1em;
	}

	@media (max-width: 900px) {
		.fullname {
			flex-direction: column;
			gap: 0;
		}

		.name {
			font-size: 34vw;
		}

		.text {
			text-align: center;
		}
	}
</style>
