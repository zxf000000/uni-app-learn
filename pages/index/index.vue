<template>
	<view class="content">
		<text id="title">日历</text>
		<calendar class="calendar"></calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '测试小程序'
			}
		},
		onLoad() {

		},
		methods: {
			change(value) {
				console.log('change', value);
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
		.calendar {
			width: 100%;
		}
			
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	

</style>
