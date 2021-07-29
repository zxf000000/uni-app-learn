<template>
	<view 
		class="day-item" 
		@click="tapItem"
		:class="{'selected': selected}"
		>
			<text class="day-text">{{item.n.cDay}}</text>
			<text class="n-text">{{item.n.IDayCn === "初一" ? item.n.IMonthCn : item.n.IDayCn}}</text>
			<view class="event-dot" v-if="Object.keys(item.event).length > 0"> </view>
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
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		&.selected {
			background-color: #4CD964;
		}

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
</style>
