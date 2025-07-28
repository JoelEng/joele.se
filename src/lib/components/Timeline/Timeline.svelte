<script lang="ts">
	import Aftonbladet from '$lib/svg/timeline/Aftonbladet.svelte';
	import Lth from '$lib/svg/timeline/Lth.svelte';
	import Postnord from '$lib/svg/timeline/Postnord.svelte';
	import School from '$lib/svg/timeline/School.svelte';
	import Svt from '$lib/svg/timeline/Svt.svelte';
	import Weknowit from '$lib/svg/timeline/Weknowit.svelte';
	import LayerButton from '$lib/components/LayerButton.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import TimelineItem from './TimelineItem.svelte';
	import Thesis from '$lib/svg/timeline/Thesis.svelte';
	import Tactel from '$lib/svg/timeline/Tactel.svelte';

	let clientWidth = 0;
	let show = false;
</script>

<div class="container">
	<Switch label="just the best bits" label2="everything" bind:checked={show} />
	<div class="body" bind:clientWidth>
		<TimelineItem bind:clientWidth side="right" title="Aug 2024 onwards">
			<Tactel slot="icon" />
			<div class="content">
				<h1>Full-Stack Developer, Tactel AB</h1>
				<p>
					At Tactel I have been involved in the development and planning of a wide range of projects,
					from developing an API for external customers and creating a whole new application for evaluating that API
					to developing new features in an OpenGL 3D application.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth side="left" title="Spring 2024">
			<Thesis slot="icon" />
			<div class="content">
				<h1>Master's Thesis, Lund University</h1>
				<p>
					I wrote and published my Master's thesis at the Faculty of Engineering at Lund
					University, in collaboration with Tactel AB.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth side="left" title="Jan - Dec 2023">
			<Lth slot="icon" />
			<div class="content">
				<h1>Research Assistant, Lund University</h1>
				<p>
					University computer science reasearch is quite different from most other workplaces, and
					has provided me other learning experiences than my previous work. I have
					taken significant responsibility over the decision-making and creation of a new research
					project examining AI and prompt engineering. This research project has since been published.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth side="right" title="Summer 2022">
			<Aftonbladet slot="icon" />
			<div class="content">
				<h1>Developer, Aftonbladet</h1>
				<p>
					Working at a large media company brought lots of insight into the computer science
					industry. For a few months I became a part of their team, working more like an ordinary
					employee than an intern.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth {show} side="right" title="2021 - 2022">
			<Weknowit slot="icon" />
			<div class="content">
				<h1>Developer, We Know IT</h1>
				<p>
					As developer at a consulting company my work has consisted of various smaller tasks along
					with some larger projects, all of which have broadened my understanding of React and
					Wordpress. This is where I, for the first time, programmed in a work environment utilizing agile
					development. This was also the first time I did frontend programming.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth side="left" title="2019 - 2024">
			<School slot="icon" />
			<div class="content" style:background="none">
				<LayerButton offset="5px" borderRadius="inherit" background="var(--card)">
					<h1>MSc in Computer Science, Lund University</h1>
					<p>
						I have a Master's degree in Computer Science specializing
						in Software. As part of my education, I have learned everything from functional
						programming with Haskell and multithreading with Java, to advanced mathematics and
						creating a computer.
					</p>
				</LayerButton>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth {show} side="right" title="Summer 2018 & 2019">
			<Postnord slot="icon" />
			<div class="content">
				<h1>Mailman, Postnord</h1>
				<p>
					I spent the summer working close to my best friends, waking with the early-morning sunrise
					at 5 am, and getting some serious leg workouts running up and down the humid stairways of
					downtown Stockholm.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth {show} side="right" title="2017 - 2019">
			<Svt slot="icon" />
			<div class="content">
				<h1>Transcriber, Sveriges Television</h1>
				<p>
					I worked for the swedish national television show “Född 2010” (Born 2010). This was an
					excellent opportunity to gain real work experience and to discipline myself to do things
					on time and in a satisfactory manner. I kept myself busy with work and school, yet managed
					to plan well and allocate time for both.
				</p>
			</div>
		</TimelineItem>
		<TimelineItem bind:clientWidth {show} side="left" title="2016 - 2019">
			<School slot="icon" />
			<div class="content">
				<h1>Natural Science Program, Nacka Gymnasium</h1>
				<p>
					A small course in Java became my first real introduction to programming. Other than that,
					I had a real interest in Swedish and English.
				</p>
			</div>
		</TimelineItem>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.body {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.content {
		height: fit-content;
		background: var(--card);
		margin: min(40px, 8%);
		margin-top: 0;
		margin-bottom: 100px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: inherit;
		width: fit-content;
		align-items: inherit;
		text-align: inherit;
	}

	h1 {
		font-size: 1.4rem;
		font-weight: bold;
		line-height: 1.4rem;
		margin: 10px 20px 0 20px;
		padding: 5px;
		height: fit-content;
	}

	p {
		height: fit-content;
		margin: 20px;
		margin-top: 0;
	}
</style>
