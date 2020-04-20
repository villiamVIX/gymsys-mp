import {
	getCoachList
} from "../../../network/NetTrain.js"

Component({
	data: {
		imgBaseUrl: getApp().globalData.imgBaseUrl,
		coachType: [
			{
				'imgUrl': '/defat.png',
			},
			{
				'imgUrl': '/muscle.png',
			},
			{
				'imgUrl': '/yoga.png',
			},
		]
	},
	properties: {
		CoachList: {
			type: Array,
		}
	},
	methods: {
		clickType(event) {
			const index = event.currentTarget.dataset.type
			this.triggerEvent('clickType', index)
		}
	
	}
})
