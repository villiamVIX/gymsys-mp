import {
	getCoachList
} from "../../../network/NetTrain.js"

Component({
	data: {
		imgBaseUrl: getApp().globalData.imgBaseUrl,
		showActionsheet: false,
		CoachDetail: [],
		CurrentType: '',
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
		filterCoach() {
			// 先清空教练栏目 防止重复PUSH
			this.data.CoachDetail = []
			let {CoachDetail,CurrentType} = this.data
			let {CoachList}=this.properties
			for (let i = 0; i < CoachList.length; i++) {
				if (CoachList[i].major.indexOf(CurrentType) !== -1) { //在专业里看是否包含对应专业 若有PUSH进传送数据的数组
				     CoachDetail.push(CoachList[i])
				} 
			}
			this.setData({
				CoachDetail
			})
			this.triggerEvent('showModal',CoachDetail)
		},
		clickType(event) {
			let index = event.detail
			switch (index) {
				case 0:
					this.data.CurrentType = '减脂'
					break;
				case 1:
					this.data.CurrentType = '增肌'
					break;
				case 2:
					this.data.CurrentType = '瑜伽'
					break;
			}
			this.filterCoach()
			// this.isShowList = true
		},


		close: function() {
			this.setData({
				showActionsheet: false
			})
		},
		btnClick(e) {
			console.log(e)
			this.close()
		},
	
	}
})
