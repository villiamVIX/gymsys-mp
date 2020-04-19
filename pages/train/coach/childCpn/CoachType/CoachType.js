// pages/train/coach/childCpn/CoachType/CoachType.js
Component({
	properties:{
		coachType:{
			type:Array,
			value:['暂无数据']
		}
	},
	data: {
		imgBaseUrl: getApp().globalData.imgBaseUrl,
		
	},
	methods: {
		clickType(event) {
			const index = event.currentTarget.dataset.type
			console.log(event)
			this.triggerEvent('clickType', index)
		}
	}
})
