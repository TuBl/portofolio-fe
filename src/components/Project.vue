<template>
	<div class="image-container">
		<h1 data-aos="fade-left" data-aos-delay="2000">{{ title }}</h1>
		<a :href="uri" target="_blank">
			<img
				:src="require(`@/assets/${fileName}`)"
				alt=""
				data-aos="slide-right"
				data-aos-easing="ease-in"
				:data-aos-duration="duration"
				:data-aos-delay="delay"
			/>
		</a>
	</div>
</template>

<script>
	export default {
		name: "Project",
		props: {
			fileName: String,
			duration: [Number, String],
			delay: [Number, String],
			uri: String,
			title: String,
		},
	};
</script>

<style scoped lang="scss">
	.image-container {
		height: 100%;
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		position: relative;
		img {
			height: 720px;
			width: 800px;
			padding: 0.2em;
			box-shadow: 0px 0px 10px #fffffc;
		}
		h1 {
			color: #fffffc;
			position: absolute;
			font-size: 1.6vw;
			height: 60px;
			width: fit-content;
			border-radius: 10%;
			box-shadow: 0px 0px 10px #2c3e50;
			padding: 0.2em;
			background: #586f7c;
			left: 0;
			top: -34%;
			z-index: 200;
		}
	}
</style>
