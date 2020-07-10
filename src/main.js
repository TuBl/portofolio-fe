import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import Aos from "aos";
import "aos/dist/aos.css";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
	container: "body",
	duration: 1050,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
});
new Vue({
	created() {
		Aos.init();
	},
	apolloProvider,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
