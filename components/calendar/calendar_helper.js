import dayjs from '../../common/dayjs/esm/index.js'
import toObject from '../../common/dayjs/plugin/toObject.js'
import calendar from '../../common/calendar.js'
import dayOfYear from '../../common/dayjs/plugin/dayOfYear.js'

dayjs.extend(toObject);

class CalendarHelper {
	constructor(arg) {
		this.datas = {};
	}
	
	/**
	 * 获取当前月份的所有日期
	 */
	getMonthDays(day = null) {
		let today = day;
		if (today === null) {
			today = dayjs();
		}
		const currentMonth = today.month();
		const monthFirstDay = this.getFirstDayOfMonth(today);
		const weekday = monthFirstDay.day()
		const firstDay = monthFirstDay.subtract(weekday, 'day');
		if (this.datas[firstDay.format()] !== undefined) {
			return this.datas[firstDay.format()];
		}
		const arr = [];
		for (let i = 0; i < 42; i++ ) {
			const day = firstDay.add(i, 'day');
			const nO = calendar.solar2lunar(day.year(), day.month() + 1, day.date());
			const obj = {y: day, n: nO, currentMonth: day.month() === currentMonth, event: {}};
			arr.push(obj);
		}
		const res = {
			monthStart: monthFirstDay,
			days: arr,
		};
		this.datas[firstDay.format()] = res;
		return res;
	}
	
	getFirstDayOfMonth(day = null) {
		let thisDay = day;
		if (day === null) {
			thisDay = dayjs();
		}
		thisDay = thisDay.hour(0);
		thisDay = thisDay.minute(0);
		thisDay = thisDay.second(0);
		thisDay = thisDay.millisecond(0);
		const date = thisDay.date();
		const firstDay = thisDay.subtract(date - 1, 'day');
		return firstDay;
	}
	
}

const calendarHelper = new CalendarHelper();

export default calendarHelper;