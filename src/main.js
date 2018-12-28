import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
//components 
import CustomWidget from './components/CustomWidget.vue'

//implement router
Vue.use(VueRouter);

//establish routes
const routes = {
	name: "home",
	path: "/",
	component: CustomWidget,
	props: true,
};

Vue.config.productionTip = false;

const router = new VueRouter({
	mode: "history",
	routes: routes,
});

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
