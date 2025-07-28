<script>
	import Cpp from '$lib/svg/logos/Cpp.svelte';
	import Css from '$lib/svg/logos/Css.svelte';

	import Git from '$lib/svg/logos/Git.svelte';
	import Haskell from '$lib/svg/logos/Haskell.svelte';
	import Html from '$lib/svg/logos/Html.svelte';
	import Java from '$lib/svg/logos/Java.svelte';
	import JavaScript from '$lib/svg/logos/JavaScript.svelte';
	import Kotlin from '$lib/svg/logos/Kotlin.svelte';
	import React from '$lib/svg/logos/React.svelte';
	import Rust from '$lib/svg/logos/Rust.svelte';
	import Svelte from '$lib/svg/logos/Svelte.svelte';

	import SkillItem from './SkillItem.svelte';
</script>

<div>
	<SkillItem name="Kotlin">
		<Kotlin slot="img"/>
		My main language of use at Tactel AB and one that I have learned to enjoy for it's clear and concise syntax.
	</SkillItem>
	<SkillItem name="C && C++">
		<Cpp slot="img"/>
		I used C a lot towards the end of my time at university, which ended up laying the foundation for my use of C++ and OpenGL at Tactel.
	</SkillItem>
	<SkillItem name="Git">
		<Git slot="img" />
		I have used Git extensively at work and in school. I have become proficient in Gerrit, Github, and Gitlab
		and have feel comfortable with advanced branch management and lots more.
	</SkillItem>
	<SkillItem name="Java">
		<Java slot="img" />
		An often used language at university, and one I have become quite comfortable using for everything from
		concurrent programming to large, complicated projects.
	</SkillItem>
	<SkillItem name="Rust">
		<Rust slot="img" />
		Although never a part of my education or work, I have learned Rust during my free-time, for example
		using it for Advent of Code multiple years.
	</SkillItem>
	<SkillItem name="Svelte">
		<Svelte slot="img"/>
		A lot of the projects I have created in my free time, either with friends or on my own (such as this website) have been created with Svelte.
		Although not as popular among corporations as React, I find it very enjoyable and intuitive to use.
	</SkillItem>
	<SkillItem name="Haskell">
		<Haskell slot="img" />
		A fantastically simple language that has interested me far more than I have had the chance to use it.
		I am still, to this day, very fond of the course that introduced it to me.
	</SkillItem>
	<SkillItem name="React">
		<React slot="img" />
		I learned React when applying to my first frontend job and have used it more than a lot since then,
		for everything big and small. This website was written in React before I converted it to Svelte.
	</SkillItem>
	<SkillItem name="JavaScript && TypeScript">
		<JavaScript slot="img" />
		With my experience in the largely similiar Java, paired with all the time spent during work-hours,
		JavaScript is likely one of the languages I have become best at.
	</SkillItem>
	<SkillItem name="HTML && CSS">
		<Html slot="img" />
		When designing a website, I often spend a long time thinking about the logic of the HTML and how
		to make it great in the simplest way possible. I love tinkering in CSS to get a website to look just perfect.
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
