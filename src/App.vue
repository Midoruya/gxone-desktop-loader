<template>
	<application-frame />
	<router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ApplicationFrame from './components/application-frame.vue';
export default {
	components: { ApplicationFrame },
	mounted() {
		this.UPDATE_ACCOUNT_INFO();
	},
	computed: { ...mapGetters([]) },
	methods: {
		...mapActions(['UPDATE_ACCOUNT_INFO']),
	},
};
</script>

<style lang="scss">
body {
	border: none;
	width: 820px;
	height: 545px;
	border-radius: 6px;
	-webkit-app-region: no-drag;
	background: transparent;
	margin: 0;
}
</style>
