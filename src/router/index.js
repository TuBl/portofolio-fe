import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/blog",
		name: "Blog",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
	},
	{
		path: "/blog-list",
		name: "BlogList",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/BlogList.vue"),
	},
	{
		path: "/projects",
		name: "Projects",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("../views/Projects.vue"),
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savePosition) {
		if (savePosition) {
			return savePosition;
		} else if (to.hash) {
			return {
				selector: to.hash,
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
