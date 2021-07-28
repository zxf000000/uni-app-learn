import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		name: '123',
	},
	mutations: {
		updateName(state, props) {
			state.name = props.value;
		}
	}
}) 

export default store;