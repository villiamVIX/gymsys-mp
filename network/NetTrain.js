import request from './network.js'

export function getLesson() {
	return request({
		url: '/gymdata/lesson',
	})
}

export function getCoachList() {
	return request({
		url: '/gymdata/coach',
	})
}