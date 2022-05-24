<template>
	<div class="main-loader">
		<div class="main-loader-game-selector">
			<select-game-button v-for="(element, index) in product" @click="select_new_product(index)" :key="index" :type="element.type" :type_color="element.type_color" :index="index" :name="element.name" :icon="element.combo_icon" />
		</div>
		<div class="main-loader-select-game">
			<div class="main-loader-select-game-header">
				<img src="https://media.discordapp.net/attachments/801514450535972865/975304996323229706/unknown.png?width=959&height=338" alt="" />
				<div class="main-loader-select-game-header-main">
					<div class="main-loader-select-game-header-main-current-use">
						<div :style="'background: ' + get_data_for_selected_product.color + '; box-shadow: 0px 0px 4px ' + get_data_for_selected_product.color + ';'" class="main-loader-select-game-header-main-current-use-status" />
						<div class="main-loader-select-game-header-main-current-use-description">
							<h1>420</h1>
							<a>Человек прямо сейчас в игре</a>
						</div>
					</div>
					<div class="main-loader-select-game-header-main-start-up">
						<div class="main-loader-select-game-header-main-start-up-button">
							<div class="main-loader-select-game-header-main-start-up-button-start_button">
								<svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 6.5L0.25 12.1292L0.250001 0.870834L10 6.5Z" fill="white" />
								</svg>
								<a>Начать игру</a>
							</div>
							<div @click="sing_out_account()" class="main-loader-select-game-header-main-start-up-button-other_button">
								<svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										opacity="0.6"
										d="M12.1875 0H10.3125C9.79482 0 9.375 0.415826 9.375 0.928571C9.375 1.44132 9.79482 1.85714 10.3125 1.85714H12.1875C12.7052 1.85714 13.125 2.27297 13.125 2.78571V10.2143C13.125 10.727 12.7052 11.1429 12.1875 11.1429H10.3125C9.79482 11.1429 9.375 11.5587 9.375 12.0714C9.375 12.5842 9.79482 13 10.3125 13H12.1875C13.7408 13 15 11.7528 15 10.2143V2.78571C15 1.24719 13.7402 0 12.1875 0ZM10.0371 5.8442L6.28711 2.12991C5.92061 1.7669 5.32734 1.76748 4.96143 2.12991C4.59522 2.49263 4.59522 3.08025 4.96143 3.44297L7.11328 5.57143H0.9375C0.419238 5.57143 0 5.98638 0 6.5C0 7.01362 0.419238 7.42857 0.9375 7.42857H7.11328L4.96348 9.5579C4.59727 9.92062 4.59727 10.5082 4.96348 10.871C5.32969 11.2337 5.92295 11.2337 6.28916 10.871L10.0392 7.15667C10.4033 6.79308 10.4033 6.20692 10.0371 5.8442Z"
										fill="white" />
								</svg>
							</div>
						</div>
						<div class="main-loader-select-game-header-main-start-up-social">
							<div class="main-loader-select-game-header-main-start-up-social-routing" @click="open_social_url('https://discord.gg/BD9NDc6W8P')">
								<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.8698 0.844569C11.8659 0.837501 11.8595 0.831962 11.8516 0.828944C10.9439 0.438511 9.98605 0.160101 9.00196 0.000682896C8.99302 -0.000875387 8.98378 0.000248777 8.97556 0.00389551C8.96734 0.00754224 8.96055 0.0135259 8.95617 0.0209955C8.82574 0.242936 8.70733 0.470905 8.60141 0.704033C7.54061 0.553069 6.46158 0.553069 5.40078 0.704033C5.29415 0.470313 5.17385 0.242287 5.04042 0.0209955C5.03584 0.0136882 5.02903 0.00784238 5.02085 0.00421934C5.01268 0.000596291 5.00354 -0.000636043 4.99461 0.000682896C4.01041 0.159767 3.05247 0.438197 2.14489 0.828967C2.13712 0.832054 2.13056 0.837327 2.12612 0.844056C0.311141 3.38509 -0.186052 5.86365 0.057854 8.31151C0.0585402 8.31751 0.0605063 8.32332 0.0636353 8.32859C0.0667644 8.33386 0.0709926 8.33849 0.0760684 8.3422C1.13292 9.07581 2.31501 9.63578 3.57191 9.99821C3.58077 10.0007 3.59022 10.0006 3.599 9.99789C3.60778 9.99519 3.61547 9.99004 3.62103 9.98312C3.89099 9.63876 4.13019 9.27412 4.3362 8.8929C4.33903 8.88766 4.34065 8.88193 4.34094 8.87607C4.34124 8.87021 4.34021 8.86436 4.33791 8.8589C4.33562 8.85344 4.33212 8.8485 4.32765 8.84441C4.32317 8.84031 4.31782 8.83715 4.31194 8.83513C3.93474 8.69982 3.56956 8.53671 3.21984 8.34734C3.21349 8.34383 3.20815 8.33892 3.20431 8.33303C3.20046 8.32714 3.19822 8.32045 3.19778 8.31355C3.19735 8.30665 3.19873 8.29976 3.20181 8.29348C3.20489 8.28721 3.20957 8.28174 3.21544 8.27756C3.28882 8.22602 3.36225 8.1724 3.43232 8.11825C3.43854 8.11344 3.44608 8.11036 3.45407 8.10935C3.46206 8.10834 3.4702 8.10945 3.47756 8.11254C5.76873 9.09283 8.24924 9.09283 10.5133 8.11254C10.5207 8.10925 10.5289 8.10799 10.537 8.10891C10.5451 8.10983 10.5528 8.11289 10.5591 8.11774C10.6292 8.17189 10.7026 8.22602 10.7765 8.27756C10.7824 8.2817 10.7872 8.28713 10.7903 8.29338C10.7934 8.29964 10.7948 8.30652 10.7945 8.31341C10.7941 8.32031 10.7919 8.32701 10.7881 8.33293C10.7843 8.33885 10.779 8.34379 10.7727 8.34734C10.4237 8.53831 10.0582 8.70131 9.68005 8.83461C9.67418 8.83671 9.66885 8.83994 9.6644 8.8441C9.65995 8.84827 9.65649 8.85326 9.65424 8.85876C9.65199 8.86426 9.65101 8.87015 9.65136 8.87603C9.6517 8.88191 9.65337 8.88766 9.65625 8.8929C9.86571 9.272 10.1046 9.63618 10.3709 9.98252C10.3763 9.98962 10.3839 9.99496 10.3927 9.99776C10.4016 10.0006 10.4111 10.0007 10.42 9.99814C11.6791 9.63694 12.8633 9.07692 13.9215 8.3422C13.9266 8.33868 13.9309 8.33416 13.9341 8.32896C13.9372 8.32375 13.9391 8.31798 13.9397 8.31202C14.2317 5.48204 13.4508 3.02379 11.8698 0.844569ZM4.67837 6.82101C3.98856 6.82101 3.42018 6.22755 3.42018 5.49871C3.42018 4.76987 3.97753 4.17636 4.67837 4.17636C5.38468 4.17636 5.94757 4.77503 5.93654 5.49867C5.93654 6.22755 5.37916 6.82101 4.67837 6.82101ZM9.33029 6.82101C8.6405 6.82101 8.07212 6.22755 8.07212 5.49871C8.07212 4.76987 8.62948 4.17636 9.33029 4.17636C10.0367 4.17636 10.5995 4.77503 10.5885 5.49867C10.5885 6.22755 10.0367 6.82101 9.33029 6.82101Z"
										fill="#D5D5D5" />
								</svg>
							</div>
							<div class="main-loader-select-game-header-main-start-up-social-routing" @click="open_social_url('https://t.me/phantom_cheats')">
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.988 1.22365L13.9879 15.0065C13.9411 15.3297 13.7575 15.6114 13.4889 15.7718C13.3375 15.8621 13.1679 15.9078 12.9988 15.9078C12.868 15.9078 12.7389 15.8808 12.6148 15.8258L8.78338 14.1291L7.19395 16.6622C7.07207 16.8838 6.86894 17 6.65018 17C6.29079 17 6.00016 16.6912 6.00016 16.3094V13.1158C6.00016 12.8796 6.07429 12.65 6.21085 12.4637L13.0004 3.18731L3.82196 11.963L0.615285 10.5419C0.263648 10.3858 0.025343 10.0339 0.00190465 9.59892C-0.0215337 9.16396 0.172817 8.81133 0.503797 8.61045L14.5043 0.14022C14.8384 -0.0626209 15.2506 -0.0439604 15.5668 0.186904C15.8831 0.417768 16.0474 0.820561 15.988 1.22365Z"
										fill="#F8F8F8" />
								</svg>
							</div>
							<div class="main-loader-select-game-header-main-start-up-social-routing" @click="open_social_url('https://vk.com/phantom_store')">
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1.12467 1.19496C0 2.38992 0 4.31341 0 8.16V8.84C0 12.6866 0 14.6101 1.12467 15.805C2.24933 17 4.05968 17 7.68 17H8.32C11.9403 17 13.7507 17 14.8753 15.805C16 14.6101 16 12.6866 16 8.84V8.16C16 4.31341 16 2.38992 14.8753 1.19496C13.7507 0 11.9403 0 8.32 0H7.68C4.05968 0 2.24933 0 1.12467 1.19496ZM2.7 5.17085H4.52668C4.58668 8.415 5.93332 9.78915 7 10.0725V5.17085H8.72V7.96875C9.77332 7.84835 10.88 6.57335 11.2533 5.17085H12.9733C12.8326 5.8982 12.5521 6.58685 12.1495 7.19385C11.7469 7.8008 11.2308 8.31296 10.6333 8.69835C11.3004 9.05019 11.8895 9.54846 12.3619 10.1602C12.8342 10.772 13.1789 11.4833 13.3733 12.2471H11.48C11.3055 11.5836 10.9505 10.9897 10.4595 10.5398C9.96846 10.0899 9.36332 9.80414 8.72 9.71835V12.2471H8.51332C4.86668 12.2471 2.78667 9.59085 2.7 5.17085Z"
										fill="#F8F8F8" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-loader-select-game-description">
				<div class="main-loader-select-game-description-software">
					<div style="margin: 15px 0 10px 0" class="main-loader-select-game-description-software-header">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM10 5C10.6902 5 11.25 5.55977 11.25 6.25C11.25 6.94023 10.6902 7.5 10 7.5C9.30977 7.5 8.75 6.94141 8.75 6.25C8.75 5.55859 9.30859 5 10 5ZM11.5625 15H8.4375C7.92188 15 7.5 14.582 7.5 14.0625C7.5 13.543 7.91992 13.125 8.4375 13.125H9.0625V10.625H8.75C8.23242 10.625 7.8125 10.2051 7.8125 9.6875C7.8125 9.16992 8.23438 8.75 8.75 8.75H10C10.5176 8.75 10.9375 9.16992 10.9375 9.6875V13.125H11.5625C12.0801 13.125 12.5 13.5449 12.5 14.0625C12.5 14.5801 12.082 15 11.5625 15Z"
								fill="#C2C2C3" />
						</svg>
						<h1>Описание софта на {{ get_data_for_selected_product.full_name }}</h1>
					</div>
					<a>
						<span style="color: rgba(243, 192, 59, 0.9)">Phantom для {{ get_data_for_selected_product.full_name }}</span> - это чит, который не внедряется в<br />
						игру и не вносит изменения в её память.<br /><br />
						Благодоря чему, можно ответственно заявить о надежности<br />
						использования в <span style="color: rgba(243, 192, 59, 0.9)">долгосрочной перспективе</span>.
					</a>
					<div style="margin: 24px 0 10px 0" class="main-loader-select-game-description-software-header">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.836 4.76933C19.7223 4.2962 19.1215 4.1381 18.7774 4.48216L15.7806 7.47821L12.5274 7.4782V4.22623L15.5242 1.23018C15.8683 0.886239 15.7101 0.285504 15.237 0.172017C14.3096 -0.0507686 13.3054 -0.0671263 12.2649 0.181738C9.85922 0.756997 7.98206 2.79975 7.59841 5.24167C7.39469 6.25639 7.49256 7.26994 7.79791 8.18566L0.825634 15.1553C-0.275211 16.2557 -0.275211 18.039 0.825634 19.1391C1.34082 19.6908 2.06115 20 2.74781 20C3.43446 20 4.19002 19.7249 4.74084 19.1747L11.7131 12.205C12.6315 12.5078 13.6435 12.6058 14.695 12.44C17.1383 12.0549 19.1814 10.1781 19.7569 7.77531C20.0748 6.6986 20.0591 5.69678 19.836 4.76933ZM3.09622 17.8085C2.57751 17.8085 2.15667 17.3879 2.15667 16.8693C2.15667 16.3504 2.57751 15.9301 3.09622 15.9301C3.61494 15.9301 4.03578 16.3504 4.03578 16.8693C4.03578 17.3898 3.61494 17.8085 3.09622 17.8085Z"
								fill="#C2C2C3" />
						</svg>
						<h1>Характеристика и данные</h1>
					</div>
					<a>
						Последнее обновление состоялось<span style="color: rgba(243, 192, 59, 0.9)"> 20 января 2022 года</span>.<br />
						<span :style="'color:' + get_data_for_selected_product.color">{{ get_data_for_selected_product.status_description }} </span><br />
						Ваша подписка закончиться <span style="color: rgba(243, 192, 59, 0.9)">14 февраля 2023 года</span>.<br />
					</a>
				</div>
			</div>
			<div class="main-loader-select-game-gallary">
				<img class="main-loader-select-game-gallary-first" src="https://media.discordapp.net/attachments/801514450535972865/975343422204416010/unknown.png" alt="" />
				<div class="main-loader-select-game-gallary-other">
					<img class="main-loader-select-game-gallary-other" src="https://media.discordapp.net/attachments/801514450535972865/975344160380948530/unknown.png" alt="" />
					<img style="margin: 3px 0 0 5px" class="main-loader-select-game-gallary-other" src="https://media.discordapp.net/attachments/801514450535972865/975344136561512478/unknown.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SelectGameButton from '@/components/select-game-button.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
export default {
	components: { SelectGameButton },
	computed: {
		...mapGetters(['GET_ACCOUNT_INFO', 'IS_VALID_ACCOUNT']),
		get_data_for_selected_product() {
			return this.product[this.selected_product];
		},
	},
	data() {
		return {
			product: [],
			selected_product: 0,
		};
	},
	created() {
		this.UPDATE_ACCOUNT_INFO();
		axios.get('http://gxone.ru:5000/Product/GetAll')
			.then((response) => (this.product = response.data))
			.catch((error) => {
				console.log(error);
			});
	},
	mounted() {
		if (this.GET_ACCOUNT_INFO.agreement_accepted !== true) this.$router.push('/agreement');
		if (this.IS_VALID_ACCOUNT !== true) window.require('electron').ipcRenderer.send('close-programm');
	},
	methods: {
		...mapActions(['UPDATE_ACCOUNT_INFO', 'SING_OUT_ACCOUNT']),
		open_social_url(address) {
			window.require('electron').ipcRenderer.send('open-external-browser', address);
		},
		select_new_product(index) {
			this.selected_product = index;
		},
		sing_out_account() {
			this.SING_OUT_ACCOUNT();
			window.require('electron').ipcRenderer.send('close-programm');
		},
	},
};
</script>

<style lang="scss">
.main-loader {
	background: #181a20;
	border-radius: 6px;
	width: 950px;
	height: 650px;
	display: flex;
	&-game-selector {
		margin: 20px 0 0 0;
		width: 350px;
		height: 630px;
		background: #181a20;
		border-radius: 6px;
	}
	&-select-game {
		margin: 20px 0 0 0;
		width: 600px;
		height: 625px;
		background: #1b1e25;
		border-radius: 6px;
		display: flex;
		flex-direction: column;

		&-header {
			display: flex;
			width: 600px;
			height: 220px;
			img {
				width: 600px;
				height: 220px;
				border-radius: 6px 0px 0px 6px;
				position: absolute;
			}
			&-main {
				z-index: 99999;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&-current-use {
					margin: 10px 0 0 16px;
					display: flex;
					align-items: center;
					&-status {
						width: 13px;
						height: 13px;
						border-radius: 999px;
					}
					&-description {
						margin: 0 0 0 8px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						h1 {
							margin: 0;
							font-family: Inter, sans-serif;
							font-style: normal;
							font-weight: 400;
							font-size: 14px;
							line-height: 13px;

							color: #ffffff;
						}
						a {
							font-family: Inter, sans-serif;
							font-style: normal;
							font-weight: 400;
							font-size: 13px;
							line-height: 12px;

							color: #ffffff;
						}
					}
				}
				&-start-up {
					display: flex;
					margin: 0 0 9px 0;
					align-items: center;
					justify-content: space-between;
					width: 600px;
					&-button {
						display: flex;
						margin: 0 0 0 12px;
						&-start_button {
							width: 102px;
							height: 23px;
							background: #298af6;
							border-radius: 4px;
							display: flex;
							justify-content: center;
							align-items: center;
							a {
								margin: 0 0 0 5px;
								font-family: Inter, sans-serif;
								font-style: normal;
								font-weight: 400;
								font-size: 11px;
								line-height: 13px;
								color: #ffffff;
							}
						}

						&-start_button:hover {
							cursor: pointer;
						}

						&-other_button {
							margin: 0 2.5px 0 2.5px;
							transition: 500ms;
							opacity: 0.6;
							width: 23px;
							height: 23px;
							background: rgba(246, 41, 41, 0.4);
							border-radius: 4px;
							display: flex;
							justify-content: center;
							align-items: center;
							border: none;
						}
						&-other_button:hover {
							cursor: pointer;
							opacity: 1;
						}
					}

					&-social {
						margin: 0 18px 0 0;
						width: 70px;
						height: 17px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						&-routing {
							transition: 500ms;
							opacity: 0.6;
						}

						&-routing:hover {
							cursor: pointer;
							opacity: 1;
						}
					}
				}
			}
		}

		&-description {
			&-software {
				margin: 0 0 0 20px;
				&-header {
					margin: 15px 0 0 0;
					display: flex;
					align-items: center;
					h1 {
						margin: 0 0 0 10px;
						font-family: Inter, sans-serif;
						font-style: normal;
						font-weight: 400;
						font-size: 14px;
						line-height: 15px;
						color: rgba(255, 255, 255, 0.9);
					}
				}
				a {
					font-family: Inter, sans-serif;
					font-style: normal;
					font-weight: 400;
					font-size: 13px;
					line-height: 13px;
					color: rgba(255, 255, 255, 0.9);
				}
			}
		}

		&-gallary {
			margin: 15px 0 0 20px;
			display: flex;
			width: 100px;
			img {
				transition: 500ms;
				opacity: 0.6;
			}
			&-first {
				border-radius: 6px;
				width: 152px;
				height: 94px;
			}
			&-other {
				margin: 0 0 0 5px;
				img {
					border-radius: 6px;
					width: 69px;
					height: 44px;
				}
			}
			img:hover {
				cursor: pointer;
				opacity: 1;
			}
		}
	}
}
</style>
