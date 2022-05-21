<template>
	<div class="application-frame">
		<button @click="minimize_windows()">
			<label for="">
				<svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="12" height="1" fill="#737477" />
				</svg>
			</label>
		</button>
		<button @click="close_windows()">
			<label for="">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M11 1L1 11M1 1L11 11" stroke="white" />
				</svg>
			</label>
		</button>
	</div>
</template>

<script>
export default {
	name: 'application-frame',
	methods: {
		close_windows: () => window.require('electron').ipcRenderer.send('close-programm'),
		minimize_windows: () => window.require('electron').ipcRenderer.send('minimize-focus-windows'),
	},
};
</script>

<style lang="scss">
.application-frame {
	border: none;
	border-radius: 6px;
	z-index: 9999;
	position: absolute;
	-webkit-app-region: drag;
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	button {
		background: transparent;
		border: none;
		color: #737477;
		-webkit-app-region: no-drag;
		opacity: 0.4;
	}
	button:hover {
		opacity: 1;
	}
}
</style>
