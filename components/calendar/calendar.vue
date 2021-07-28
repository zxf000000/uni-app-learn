<template>
	<view>
		<swiper
			:indicator-dots="false"
			:circular="true"
			@change="pageChange"
			class="swiper-wrapper"
		>
			<swiper-item class="calendar-page" v-for="item in datas" :key='item.name'>
				<view class="calendar-month">
					<text class="month-text">{{item.monthStart.year()}} {{item.monthStart.month() + 1}}</text>
					<view class="days-list">
						<button class="days-item" v-for="day in item.days" plain>
							<text class="day-text" :class="{gray: !day.currentMonth}">{{day.n.cDay}}</text>
						</button>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Vue from 'vue';
	import calendarHelper from './calendar_helper.js'
	export default {
		name:"calendar",
		data() {
			return {
				items: [
					{name: '1'},
					{name: '2'},
					{name: '3'}
				],
				datas: [
					
				],
				lastPage: 0,
			};
		},
		methods: {
			pageChange(event) {
				const currentPage = event.detail.current;
				if (currentPage === this.lastPage) {
					return;
				}
				if (currentPage - this.lastPage === 1 || currentPage - this.lastPage === -2) {
					this.addNextData();
				} else {
					this.addPreData();
				}
				this.lastPage = currentPage;
			},
			addPreData() {
				const data = this.datas[this.lastPage];
				const nextMonth = calendarHelper.getMonthDays(data.monthStart.subtract(1, 'month'));
				let preIndex = this.lastPage - 1;
				if (preIndex === -1) {
					preIndex = 2;
				}
				Vue.set(this.datas, preIndex, nextMonth);
				console.log(this.datas);
			},
			addNextData() {
				// 当前页面数据
				const data = this.datas[this.lastPage];
				const nextMonth = calendarHelper.getMonthDays(data.monthStart.add(1, 'month'));
				let nextIndex = this.lastPage + 1;
				if (nextIndex === 3) {
					nextIndex = 0;
				}
				Vue.set(this.datas, nextIndex, nextMonth);
			},
			initialData() {
				const centerData = calendarHelper.getMonthDays();
				const lastMonthDays = calendarHelper.getMonthDays(centerData.monthStart.subtract(1, 'month'));
				const nextMonthDays = calendarHelper.getMonthDays(centerData.monthStart.add(1, 'month'));
				console.log(centerData.monthStart);
				this.datas = [centerData,nextMonthDays, lastMonthDays];
				console.log(this.datas);
			}
		},
		mounted() {
			this.initialData()
		}
	}
</script>

<style lang="scss" scoped>

.swiper-wrapper {
	width: 100%;
	height: 600rpx;
}

.calendar-page {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
}

.month-text {
	color: white;
	font-size: 40rpx;
}
	
.calendar-text {
	background-color: yellow;
	text-align: center;
}

.calendar-month {
	width: 100%;
	height: 100%;
}

.days-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14.1%, 14.2%));
	width: 100%;
	.days-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80rpx;
		&.button-hover {
			background-color: yellow;
		}
		.day-text {
			color: white;

			&.gray {
				color: gray;
			}
		}
	}
}

.grid {
	width: 100%;
// 	height: calc(100% - 200rpx);
}

.day-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.day-text {
		color: white;

	}
}

</style>
