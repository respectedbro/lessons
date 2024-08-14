'use strict'

const days = [
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
	'Воскресенье',
]

const addTimeZero = time => {
	if (time < 10) {
		return '0' + time
	} else {
		return time
	}
}

const formatTimeOfDay = hours => {
	if (hours > 0 && hours < 6) {
		return 'Доброй ночи'
	} else if (hours > 6 && hours < 10) {
		return 'Доброе утро'
	} else if (hours > 10 && hours < 18) {
		return 'Добрый день'
	} else {
		return 'Добрый вечер'
	}
}
const formatLocaleTime = hours => {
	if (hours > 0 && hours < 12) {
		return 'AM'
	} else {
		return 'PM'
	}
}

const getDaysUnNewYear = () => {
	const now = new Date()
	const nextYear = now.getFullYear() + 1
	const newYear = new Date(nextYear, 0, 1)

	const diffInTime = newYear - now
	const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24))

	return diffInDays
}

let dateNow = document.createElement('span')
document.body.append(dateNow)

const updateTime = () => {
	const date = new Date()

	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let day = date.getDay()

	let timeOfDay = formatTimeOfDay(hours)
	let localeTime = formatLocaleTime(hours)
	let daysUnNewYear = getDaysUnNewYear()

	let formatHours = addTimeZero(hours)
	let formatMinutes = addTimeZero(minutes)
	let formatSeconds = addTimeZero(seconds)

	if (day === 0) {
		day = 6
	} else {
		day -= 1
	}

	dateNow.textContent = `${timeOfDay} Сегодня ${days[day]} Текущее время: ${formatHours}:${formatMinutes}:${formatSeconds}${localeTime}
	до нового года осталось ${daysUnNewYear} дней`

	setTimeout(updateTime, 1000)
}

updateTime()
