<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: #2c3e50;
	}
	a:active {
		color: #2c3e50;
	}
	a:visited {
		color: #2c3e50;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		scroll-behavior: smooth;
		height: auto;
		text-align: center;
		font-family: Righteous;
		font-style: normal;
		font-weight: normal;
	}
</style>
