<div class="body">
	<div class="img">
		<div class="imgBorder" />
		<img src="portrait.jpg" alt="me!" width="100%" />
	</div>
	<h1>Who am I?</h1>
	<p>
		I am a computer science engineer currently working at Tactel AB in Malmö, Sweden. I have experience in many different
		fields of computer science, from frontend to backend. Learning new things is what I'm best at,
		and I'm always eager to become a better developer.
	</p>
	<div style:clear="both" />
	<a href="mailto: joel.n.engstrom@protonmail.com" target="_blank" rel="noopener noreferrer">
		<h2 class="contact">shoot me an email</h2>
	</a>
</div>

<style lang="scss">
	.body {
		/* background: linear-gradient(#f87e8e, #e55468); */
		border-radius: 40px;
		border: 6px solid var(--primary);
		background: var(--card);
		padding: 2rem;
		/* color: var(--background); */
		width: 100%;
		max-width: 740px;
		align-self: center;
		transform: rotate(4deg);

		@media (max-width: 900px) {
			display: flex;
			flex-direction: column;
			padding: 1.4rem;
			transform: rotate(0);
		}
	}

	h1 {
		/* color: currentColor; */
		font-size: calc(30px + 1vw);
	}

	p {
		/* color: currentColor; */
		font-size: large;
	}

	.img {
		position: relative;
		float: right;
		border-radius: 20px;
		margin: 1rem;
		width: 30%;

		@media (max-width: 900px) {
			width: 70%;
			margin: 0;
			margin-bottom: 1rem;
			align-self: center;
		}
	}

	.imgBorder {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		border: 4px solid var(--primary);
		transform: translate3D(-10px, -10px, 0);
	}

	img {
		border-radius: inherit;
		display: block;
	}

	a {
		text-decoration: none;
	}

	.contact {
		position: relative;
		width: 100%;
		text-align: center;

		font-family: var(--font);
		color: var(--background);
		background: var(--text);
		padding-block: 1rem;
		margin-top: 1rem;
		border-radius: 100px;
	}
</style>
