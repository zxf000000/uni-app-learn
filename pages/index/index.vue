<template>
	<view class="content">
		<view class="home-header">
			<text id="title">日历</text>
			<text id="month">{{month}}</text>
		</view>
		<calendar
			@didChangeMonth="monthChanged"
			class="calendar"></calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '测试小程序',
				month: ''
			}
		},
		onLoad() {
					
		},
		methods: {
			change(value) {
				console.log('change', value);
			},
			monthChanged(value) {
				console.log(value);
				this.month = value.month.monthStart.year() + "/" + (value.month.monthStart.month() + 1);
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		.home-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;
		}
		.calendar {
			width: 100%;
		}
			
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	

</style>
