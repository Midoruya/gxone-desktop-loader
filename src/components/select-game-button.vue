<template>
	<div @click="click_effect()" :id="'select-game-button-' + index" class="select-game-button select-game-button-default">
		<img :src="icon" alt="" />
		<div class="select-game-button-description">
			<h1>{{ name }}</h1>
			<div class="select-game-button-description-type" :style="'background : ' + type_color">
				<a>{{ type }}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'select-game-button',
	props: {
		index: {
			type: String,
		},
		icon: {
			type: String,
			default: 'https://media.discordapp.net/attachments/801514450535972865/975307344382689321/unknown.png',
		},
		name: {
			type: String,
			default: 'Test game',
		},
		type: {
			type: String,
			default: 'External',
		},
		type_color: {
			type: String,
			default: '#298AF6',
		},
	},
	methods: {
		click_effect() {
			let all_button = document.querySelectorAll('div.select-game-button');
			if (all_button.length > 0) {
				for (let i = 0; i < all_button.length; i++) {
					all_button[i].classList.remove('select-game-button-active');
					all_button[i].classList.remove('select-game-button-default');
					all_button[i].classList.add('select-game-button-default');
				}
			}
			let select_item = document.getElementById('select-game-button-' + this.index);
			select_item.classList.remove('select-game-button-active');
			select_item.classList.remove('select-game-button-default');
			select_item.classList.add('select-game-button-active');
		},
	},
};
</script>

<style lang="scss" scoped>
.select-game-button-active {
	opacity: 1;
	img {
		background: #298af6;
	}
}

.select-game-button-default {
	opacity: 0.6;
	img {
		background: #1b1e25;
	}
}

.select-game-button {
	margin: 0 0 8px 20px;
	transition: 500ms;
	display: flex;
	align-items: center;
	img {
		border-radius: 8px;
		width: 100px;
		height: 60px;
	}
	&-description {
		margin: 0 0 0 10px;
		display: flex;
		height: 40px;
		flex-direction: column;
		justify-content: space-around;

		h1 {
			font-family: Inter, sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 13px;
			line-height: 16px;
			color: #ffffff;
			margin: 0 0 3px 0;
		}
		&-type {
			width: 60px;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 2px;

			a {
				font-family: Inter, sans-serif;
				font-style: normal;
				font-weight: 400;
				font-size: 11px;
				line-height: 13px;
				text-align: center;

				color: #ffffff;
			}
		}
	}
}

.select-game-button:hover {
	cursor: pointer;
	opacity: 1;
}
</style>
