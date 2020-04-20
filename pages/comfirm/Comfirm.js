// pages/comfirm/Comfirm.js
import {
	getCoachDetail
} from '../../network/NetTrain.js'
const app=getApp().globalData
Page({

	data: {
		baseUrl:app.baseUrl,
		coachInfo:{}
	},

	onLoad: function(options) {
		getCoachDetail(options.coachId).then(res=>{
			console.log(res.data.data)
			const coachInfo=res.data.data
			this.setData({
				coachInfo
			})
			
		})
	},
	

})
