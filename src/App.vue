<template>
	<h1>settleup</h1>
	<p>a simple payout calculator for equal value dot wagers</p>
	<p>
		enter the stakes for the value of each dot then enter the sum of each
		players dots on the front and back
	</p>
	<router-view />
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
