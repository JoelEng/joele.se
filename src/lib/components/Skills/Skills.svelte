<script>
	import Css from '$lib/svg/logos/Css.svelte';

	import Git from '$lib/svg/logos/Git.svelte';
	import Haskell from '$lib/svg/logos/Haskell.svelte';
	import Html from '$lib/svg/logos/Html.svelte';
	import Java from '$lib/svg/logos/Java.svelte';
	import JavaScript from '$lib/svg/logos/JavaScript.svelte';
	import React from '$lib/svg/logos/React.svelte';
	import Rust from '$lib/svg/logos/Rust.svelte';

	import SkillItem from './SkillItem.svelte';
</script>

<div>
	<SkillItem name="Git">
		<Git slot="img" />
		I have used Git extensively in school and at work. I have learned branch management such as proper
		merging, along with lots of other useful information.
	</SkillItem>
	<SkillItem name="Java">
		<Java slot="img" />
		My primary language of use, and the one I am most proficient in. Java has been used throughout my
		education in everything from concurrent programming to large projects.
	</SkillItem>
	<SkillItem name="Rust">
		<Rust slot="img" />
		Although never a part of my education or work, I have learned Rust during my free-time, for example
		using it to complete a large part of Advent of Code 2021.
	</SkillItem>
	<SkillItem name="Haskell">
		<Haskell slot="img" />
		In my opinion the most enjoyable language to write, and the most beautiful. The course that introduced
		me to it is my all time favourite so far, and I have a deep love for the language itself.
	</SkillItem>
	<SkillItem name="React">
		<React slot="img" />
		I learned React when applying to my first frontend job and have used it more than a lot since then,
		for everything big and small. This website uses React!
	</SkillItem>
	<SkillItem name="JavaScript">
		<JavaScript slot="img" />
		With my experience in the largely similiar Java, paired with all the time spent during work-hours,
		JavaScript is likely one of the languages I have become best at.
	</SkillItem>
	<SkillItem name="HTML">
		<Html slot="img" />
		When designing a website, I often spend a long time thinking about the logic of the HTML and how
		to make it great in the simplest way possible.
	</SkillItem>
	<SkillItem name="CSS">
		<Css slot="img" />
		I love tinkering in CSS to get a website to look just perfect. I am well-versed in many different
		implementations of CSS, such as Sass and Styled Components.
	</SkillItem>
</div>

<style lang="scss">
	div {
		display: grid;
		row-gap: 2rem;

		@media (min-width: 1100px) {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 4rem;
		}
	}
</style>
