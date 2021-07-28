<template>
<!-- 	<view class="day-item">
		<button class="day-item-button" @click="tapItem"> -->
			<text style="color: white;">{{item.day.n.cDay}}</text>
<!-- 		</button>
	</view> -->
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
			}
		},
		methods: {
			tapItem() {
				this.$emit('select', {value: item});
			}
		}
	}
</script>

<style scoped lang="scss">
	.day-item {
		.day-item-button {
			color: white;
		}
	}
</style>
