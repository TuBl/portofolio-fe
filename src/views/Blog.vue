<template>
	<section class="article">
		<section class="article__container">
			<section class="article__header">
				<h1 clas="article__title">
					{{ articles[0].title }}
				</h1>
				<p class="article__published_at">
					{{ articles[0].published_at }}
				</p>
			</section>

			<section class="article__main">
				<section class="article__content">
					<vue-markdown-it
						:source="articles[0].content"
						id="editor"
						:options="options"
						class="md-body"
					>
					</vue-markdown-it>
				</section>

				<img :src="api_url + articles[0].image[0].url" alt="ohno!" />
			</section>
		</section>
	</section>
</template>

<script>
	import gql from "graphql-tag";
	import VueMarkdownIt from "vue-markdown-it";
	export default {
		name: "Blog",
		data() {
			return {
				articles: [],
				api_url: process.env.VUE_APP_STRAPI_API_URL,
				options: {
					markdownIt: {
						linkify: true,
					},
				},
			};
		},
		components: {
			VueMarkdownIt,
		},
		apollo: {
			articles: gql`
				query Articles {
					articles {
						title
						content
						image {
							url
						}
						published_at
					}
				}
			`,
		},
	};
</script>

<style lang="scss" scoped>
	.article {
		background: #2c3e50;
		height: 100vh;
		width: 100vw;
		display: grid;
		color: #fffffc;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		place-items: center;
		&__container {
			text-align: justify;
			height: auto;
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
			grid-template-rows: repeat(autofit, minmax(250px, 1fr));
			grid-template-areas:
				".  header  ."
				".  main    .";
			place-items: center;
		}
		&__header {
			grid-area: header;
			width: 100%;
			height: 100%;
			margin-left: 50%;
			padding-bottom: 1em;
			h1 {
				padding-bottom: 0.5em;
				font-size: 2vw;
			}
			p {
				font-size: 1vw;
			}
		}

		&__main {
			grid-area: main;
			width: 100%;
			height: 100%;
			margin-left: 50%;
		}

		&__content {
			margin-bottom: 3em;
			padding: 1em;
			padding-left: 0em;
		}
		img {
			height: 250px;
			width: 250px;
		}
	}
</style>
