// pages/train/Train.js
import {
	getLesson,
	getCoachList
} from '../../network/NetTrain.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgBaseUrl:getApp().globalData.imgBaseUrl,
		Lesson:null,
		CoachList:null,
		current: 0,
		categoryList: null ,// 分类列表，null表示分类正在加载
		CoachDetail:[]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this._getCoachList(),
		this._getLesson()
	},
	_getLesson() {
		getLesson().then(res => {
			const Lesson = res.data
			this.setData({
				Lesson
			})
		})
	},
	_getCoachList(){
		getCoachList().then(res => {
			const CoachList = res.data
			this.setData({
				CoachList
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
		console.log(e)
		const CoachDetail=e.detail
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
