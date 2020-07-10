<template>
	<div class="projects-container">
		<Project
			:fileName="projectList[batchNumber].fileName"
			:class="projectList[batchNumber].class"
			:duration="projectList[batchNumber].duration"
			:delay="projectList[batchNumber].delay"
			:uri="projectList[batchNumber].uri"
			:title="projectList[batchNumber].title"
			:key="batchNumber"
		></Project>
		<Project
			:fileName="projectList[batchNumber + 1].fileName"
			:class="projectList[batchNumber + 1].class"
			:duration="projectList[batchNumber + 1].duration"
			:delay="projectList[batchNumber + 1].delay"
			:uri="projectList[batchNumber + 1].uri"
			:title="projectList[batchNumber + 1].title"
			:key="batchNumber + 1"
		></Project>
		<Project
			:fileName="projectList[batchNumber + 2].fileName"
			:class="projectList[batchNumber + 2].class"
			:duration="projectList[batchNumber + 2].duration"
			:delay="projectList[batchNumber + 2].delay"
			:uri="projectList[batchNumber + 2].uri"
			:title="projectList[batchNumber + 2].title"
			:key="batchNumber + 2"
		></Project>
		<Project
			:fileName="projectList[batchNumber + 3].fileName"
			:class="projectList[batchNumber + 3].class"
			:duration="projectList[batchNumber + 3].duration"
			:delay="projectList[batchNumber + 3].delay"
			:uri="projectList[batchNumber + 3].uri"
			:title="projectList[batchNumber + 3].title"
			:key="batchNumber + 3"
		></Project>

		<div
			class="btn btn1"
			data-aos="fade-down-left"
			data-aos-delay="250"
			data-aos-duration="1000"
		>
			<div class="insider">
				<router-link to="/" v-scroll-to="'#main'">Back to top</router-link>
			</div>
		</div>
		<div
			class="btn btn2"
			@click="loadProjects"
			data-aos="fade-down-left"
			data-aos-delay="250"
			data-aos-duration="1000"
		>
			<div class="insider">
				{{ btnText }}
			</div>
		</div>
		<div
			class="btn btn3"
			data-aos="fade-left"
			data-aos-delay="2000"
			data-aos-duration="1000"
		>
			<div class="insider insider--dark">
				<router-link to="/" v-scroll-to="'#contact-me'">Hire me!</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Project from "../components/Project";
	export default {
		name: "Projects",
		data() {
			return {
				projectList: [
					{
						fileName: "project_1.png",
						class: "project one",
						duration: "1000",
						delay: "250",
						uri: "https://immense-bayou-20235.herokuapp.com/",
						title: "Yelp Camp",
					},
					{
						fileName: "project_2.png",
						class: "project two",
						duration: "1000",
						delay: "500",
						uri: "https://agile-temple-78256.herokuapp.com/",
						title: "DevConnector",
					},
					{
						fileName: "project_4.png",
						class: "project three",
						duration: "1000",
						delay: "750",
						uri: "https://tomballs.herokuapp.com/",
						title: "Tomballs",
					},
					{
						fileName: "project_3.png",
						class: "project four",
						duration: "1000",
						delay: "1000",
						uri: "https://github.com/TuBl/COHShow",
						title: "HRM",
					},

					{
						fileName: "project_5.png",
						class: "project one",
						duration: "1000",
						delay: "250",
						uri: "https://spicy-coffee.herokuapp.com/",
						title: "Stripe Demo",
					},
					{
						fileName: "project_6.png",
						class: "project two",
						duration: "1000",
						delay: "500",
						uri: "https://competent-noyce-3fd8e2.netlify.app/",
						title: "Grid Design demo",
					},
					{
						fileName: "project_7.png",
						class: "project three",
						duration: "1000",
						delay: "750",
						uri: "https://github.com/TuBl/InstaClone",
						title: "Instagram Clone",
					},
					{
						fileName: "project_8.png",
						class: "project four",
						duration: "1000",
						delay: "1000",
						uri: "https://stupefied-hopper-845e2a.netlify.app/",
						title: "VueX ToDo",
					},
				],
				batchNumber: 0,
				btnText: "More Projects",
			};
		},
		components: {
			Project,
		},
		methods: {
			loadProjects() {
				window.open("mailto:test@example.com");
				// this.batchNumber == 0
				// 	? ((this.batchNumber = 4), (this.btnText = "Previous Projects"))
				// 	: ((this.batchNumber = 0), (this.btnText = "More Projects"));
			},
		},
	};
</script>

<style lang="scss" scoped>
	.projects-container {
		scroll-snap-align: start;
		height: auto;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		width: 100vw;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #2c3e50;
		padding: 15em;

		.one {
			z-index: 10;
			transform: matrix(1, 0.41, 0, 0.69, 20, 0);
		}
		.two {
			z-index: 9;
			transform: matrix(1, 0.41, 0, 0.68, 20, 0);
		}
		.three {
			z-index: 8;
			transform: matrix(1, 0.41, 0, 0.67, 20, 0);
		}
		.four {
			z-index: 7;
			transform: matrix(1, 0.41, 0, 0.66, 20, 0);
		}
		.project:hover {
			transform: matrix(1, 0.41, 0, 0.69, 20, -25);
			transition: transform 200ms ease-in-out;
		}

		.btn {
			position: absolute;
			height: 5%;
			width: 9%;
			z-index: 10000;
			font-size: 1em;
			border-radius: 3%;
			color: #fffffc;
		}
		.btn1 {
			top: 3%;
			right: 2%;
		}
		.btn2 {
			top: 9%;
			right: 2%;
		}
		.btn3 {
			top: 15%;
			right: 2%;
		}
		.insider {
			height: 100%;
			width: 100%;
			padding: 1em;
			text-align: center;
			vertical-align: center;
			background: #586f7c;
			font-size: 1em;
			border-radius: 3%;
			cursor: pointer;
			a {
				display: inline-block;
				color: white;
				width: 100%;
				height: 100%;
			}
		}
		.insider:hover {
			transform: scale(0.98);
		}
		.insider--dark {
			background: #4c7aa8;
			font-size: 1.5em;
			padding: 0.5em;
			// animation: text-animation 1000ms 1850ms ease-in-out forwards;
		}
		@keyframes text-animation {
			from {
				font-size: 1em;
			}
			50% {
				font-size: 1.5em;
				padding: 0.5em;
			}
			to {
				font-size: 1em;
			}
		}
	}
</style>
