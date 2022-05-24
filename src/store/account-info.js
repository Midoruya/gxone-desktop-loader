import axios from 'axios';

export default {
	actions: {
		UPDATE_ACCOUNT_INFO({ commit }) {
			axios.defaults.withCredentials = true;
			axios({
				method: 'POST',
				url: 'http://gxone.ru:5000/Account',
			})
				.then((response) => {
					commit('SET_ACCOUNT_INFO', response.data);
				})
				.catch((error) => {
					console.log('<========== Axios ==========>');
					console.error(error);
				});
		},
		SING_OUT_ACCOUNT() {
			axios.defaults.withCredentials = true;
			axios({
				method: 'POST',
				url: 'http://gxone.ru:5000/Account/LogOut',
			})
				.then(() => {
					this.dispatch('UPDATE_ACCOUNT_INFO');
				})
				.catch((error) => {
					console.log('<======> Axios Error <======>');
					console.log(error);
					return false;
				});
		},
	},
	mutations: {
		SET_ACCOUNT_INFO: (state, object) => {
			state.account_info = object;
		},
	},
	state: {
		account_info: {
			avatar: 'https://media.discordapp.net/attachments/949997166284374016/950422252673978428/-2.png',
			time: '0000-00-00',
			uid: 0,
			mail: 'test@mail.ru',
			username: 'test user',
			agreement_accepted: false,
		},
	},
	getters: {
		GET_ACCOUNT_INFO: (state) => state.account_info,
		IS_VALID_ACCOUNT: (state) => state.account_info.Role !== undefined,
	},
};
