import {
	getHomeCommon,
	getNewsList
} from '../../network/NetHome.js'

Page({
	data: {
		imgBaseUrl:getApp().globalData.imgBaseUrl,
		swipers: [],
		recommend: {},
		reqData: {
			pageSize: 5,
			page: 1,
		},
		newsList:[]
	},
	onLoad: function(options) {
		this._getHomeCommon()
		this._getNewsList()
	},
	_getHomeCommon(){
		getHomeCommon().then(res=>{
			const swipers=res.data[0].swipers
			const recommend=res.data[0].recommend
			// 将banners和recommends放到data中
			this.setData({
			  swipers,
			  recommend
			})
			console.log(this.data.newsList)
		})
	},
	_getNewsList(){
		getNewsList(this.data.reqData).then(res=>{
			let newsList=res.data.newslist
			this.setData({
			  newsList
			})
		})
	},
	handleGetData(){
	  wx.getUserInfo({
	    success: function (res) {
	      console.log(res)
	    }
	  })
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return{
			title:'你不来健身?',
			path:"/pages/home/Home",
			imageUrl:"http://120.79.171.194:3008/images/common/swiper/c1c3b3c5238d6cf5d78aab965299d551.jpeg",
			
		}
	}
})
