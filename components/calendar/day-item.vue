<template>
	<view class="day-item">
		<button class="day-item-button"
			:style="itemStyle"
		  @click="tapItem">
			<text class="day-text">{{item.n.cDay}}</text>
			<text class="n-text">{{item.n.IDayCn === "初一" ? item.n.IMonthCn : item.n.IDayCn}}</text>
			<view class="event-dot" v-if="Object.keys(item.event).length > 0">
			</view>
		</button>
	</view>
</template>

<script>
	export default {
		name: 'DayItem',
		props: {
			item: {
				type: Object,
				default() {
					return {};
				}
			},
			selected: {
				type: Boolean,
				default: false,
			}
		},
		computed:{
			itemStyle() {
				if (this.selected) {
					return {
						background: '#FF0000',
					};
				} else {
					return {
						background: 'transparent',
					};
				}
			}
		},
		methods: {
			tapItem() {
				this.$emit('select', {value: this.item});
			}
		},
		mounted() {
		}
	}
</script>

<style scoped lang="scss">
	.day-item {
		background-color: black;
		.day-item-button {
			padding: 0;
			background: black;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			.day-text {
				color: white;
				font-size: 30rpx;
				margin: 0;
				padding: 0;
				line-height: 35rpx;
			}
			.n-text {
				color: #F1F1F1;
				font-size: 28rpx;
				margin: 0;
				padding: 0;
				line-height: 33rpx;
			}
			.event-dot {
				width: 10rpx;
				height: 10rpx;
				background-color: red;
				border-radius: 10rpx;
			}
		}
	}
</style>
