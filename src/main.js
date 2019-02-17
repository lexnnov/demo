import Vue from 'vue';
import Main from './views/Main/Main.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VTooltip from 'v-tooltip';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
	theme: {
		primary: '#2DB9F0',
		secondary: '#b0bec5',
		accent: '#8c9eff',
		error: '#b71c1c'
	}
});
Vue.use(VTooltip);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: h => h(Main),
})
