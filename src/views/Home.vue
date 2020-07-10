<template>
	<div class="main-container" id="main">
		<div class="landing-container" id="trigger-projects">
			<div class="one" data-aos="slide-up" data-aos-duration="1000">
				<div class="one-text" data-aos="fade-right" data-aos-delay="800">
					<span>One step closer</span>
					<span>to your dream site</span>
					<span data-aos="fade-right">...</span>
				</div>
			</div>
			<div class="two" data-aos="slide-up" data-aos-duration="1000">
				<nav>
					<ul>
						<router-link to="" v-scroll-to="'#display'">
							<li data-aos="fade-left" data-aos-delay="800">
								Projects
								<img src="../assets/ui.svg" alt="" class="two__pointer" /></li
						></router-link>
						<router-link to="/blog">
							<li data-aos="fade-right" data-aos-delay="800">
								Blog
							</li></router-link
						>
					</ul>
				</nav>
			</div>
			<div class="three" data-aos="slide-down" data-aos-duration="1000"></div>
			<div class="four" data-aos="slide-down" data-aos-duration="1000"></div>
		</div>

		<Projects
			class="projects"
			id="display"
			data-aos="fade-down-left"
			data-aos-duration="1000"
			data-aos-anchor="#trigger-projects"
			data-aos-anchor-placement="top-top"
		></Projects>
		<div
			class="contact-me"
			id="contact-me"
			data-aos="fade-down-left"
			data-aos-duration="1000"
			data-aos-anchor="#display"
			data-aos-anchor-placement="top-top"
		>
			<Contact></Contact>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Projects from "@/views/Projects";
	import Contact from "@/views/Contact";
	export default {
		name: "Home",
		components: {
			Projects,
			Contact,
		},
	};
</script>

<style lang="scss" scoped>
	.main-container {
		display: grid;
		height: 300vh;
		width: 100vw;
		display: flex;
		scroll-behavior: smooth;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		.header {
			z-index: 50;
			position: absolute;
			bottom: -10%;
			color: white;
		}
		.landing-container {
			scroll-snap-align: start;
			display: grid;
			height: 100vh;
			width: 100%;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				"one    two"
				"three  four";

			.one {
				grid-area: one;
				background: #272727;
				opacity: 80%;
				height: 100%;
				width: 100%;
				position: relative;
				.one-text {
					color: #fffffc;
					font-size: 3em;
					text-align: justify;
					display: flex;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					flex-direction: column;
					span:nth-of-type(2) {
						margin-left: 2em;
					}
					span:nth-of-type(3) {
						margin-left: 3em;
					}
				}
			}
			.two {
				grid-area: two;
				background: url("../assets/pots.jpg");
				background-size: cover;
				background-position: 50% 50%;
				height: 100%;
				width: 100%;
				position: relative;
				nav {
					position: absolute;
					right: 0;
					top: 0;

					ul {
						list-style: none;
						display: flex;
						position: relative;
						li {
							padding: 1em;
							font-size: 2em;
							cursor: pointer;
						}
						// a:nth-child(1)::after {
						// 	content: "Check it out!";
						// 	position: absolute;
						// 	left: 0;
						// 	color: #2c3e50;
						// }
					}
				}
				&__pointer {
					height: 20px;
					width: 40px;

					position: absolute;
					left: -6%;
					bottom: 7%;
					animation: pointer-animation 700ms 1000ms ease-in-out 2;
				}
				@keyframes pointer-animation {
					0% {
						transform: translate(0, 0);
					}
					10% {
						transform: translate(10%, -10%);
					}
					20% {
						transform: translate(20%, -20%);
					}
					30% {
						transform: translate(30%, -30%);
					}
					40% {
						transform: translate(40%, -40%);
					}
					50% {
						transform: translate(45%, -45%);
					}

					to {
						transform: translate(50%, -50%);
						display: none;
					}
				}
			}
			.three {
				grid-area: three;
				background: url("../assets/light-bulb.jpg");
				background-size: cover;
				background-position: 50% 50%;
				height: 100%;
				width: 100%;
			}
			.four {
				grid-area: four;
				background: #272727;
				opacity: 80%;
				height: 100%;
				width: 100%;
			}
		}
		.projects {
			height: 100%;
			width: 100%;
			scroll-snap-align: start;
		}
		.contact-me {
			height: 100vh;
			width: 100vw;
		}
	}
</style>
