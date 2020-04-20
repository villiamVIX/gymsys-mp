// pages/train/Train.js
import {
	getLesson,
	getCoachList
} from '../../network/NetTrain.js'
Page({

	data: {
		imgBaseUrl: getApp().globalData.imgBaseUrl,
		Lesson: null,
		current: 0,
		categoryList: null, // 分类列表，null表示分类正在加载
		CoachDetail: [],
		coachs: {},
		tabsTitle: [{
				name: '私教',
				id: 0
			},
			{
				name: '团课',
				id: 1
			},
		]
	},

	onLoad: function(options) {
		this._getCoachList(),
			this._getLesson()
	},

	clickType(i) {
		console.log(i)

	},
	_getLesson() {
		getLesson().then(res => {
			const Lesson = res.data
			this.setData({
				Lesson
			})
		})
	},
	_getCoachList() {
		getCoachList().then(res => {
			const CoachList = res.data
			const cth = CoachList.length
			let type = {
				"减脂": [],
				"增肌": [],
				"瑜伽": []
			}
			for (let i = 0; i < cth; i++) {
				for (let p in type) {
					CoachList[i].major.indexOf(p) !== -1 ? type[p].push(CoachList[i]) : null
				}
			}

			this.setData({
				coachs: type
			})
		})
	},


	handleCategoryChange(e) {
		const {
			current
		} = e.detail;

		// 让 tab 和 swiper同步
		this.setData({
			current
		})
	},
	showModal(e) {
		let index = e.detail
		let data = this.data
		let CoachDetail = null
		switch (index) {
			case 0:
				CoachDetail = data.coachs.减脂
				break;
			case 1:
				CoachDetail = data.coachs.增肌
				break;
			case 2:
				CoachDetail = data.coachs.瑜伽
				break;
		}
		// console.log(CoachDetail)
		this.setData({
			modalName: e.currentTarget.dataset.target,
			CoachDetail
		})
	},
	hideModal(e) {
		this.setData({
			modalName: null
		})
	},
})
