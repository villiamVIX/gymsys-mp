// pages/comfirm/childCpn/ConfirmSchedule/ConfirmSchedule.js
var Util= require('../../../../utils/util.js')
Component({

	properties: {
		coachInfo: {
			type: Object,
			// observer:function(a){
			// 	this.setData({
			// 		coachInfo:a
			// 	})
			// }
		}
	},
	lifetimes: {
		created() {
			this.init()
		},
		attached(){
			this.renderData()
		},
		ready(){
			this.filteBooked()
		}
	},
	data: {
		tabsTitle: [
			
		],
		current: 0,
		dateList:[],
		
	},
	methods: {
		handleCategoryChange(e) {
			const {
				current,
				data
			} = e.detail;

			// 让 tab 和 swiper同步
			this.setData({
				current
			})
		},
		renderData(){
			// 导航条
			let dateList=this.data.tabsTitle
			const dateListLen=dateList.length
			//给时间列表加的时间段
			var time=[8,10,14,16,19]
			
			// 初始化内容部分分时间段
			for(let i=0;i<dateListLen;i++){
				// console.log(dateList[i].name)
				for(let p=0;p<time.length;p++){
					let timeBox={}
					// console.log(dateList[i].name+'-'+time[p])
					timeBox.time=dateList[i].name+'-'+time[p]
					dateList[i].time.push(timeBox)
				}
			}
			this.setData({
				dateList
			})
		},
		filteBooked(){
			    // 拿到已经预订过的时间段的数组
				let bookInfo=this.properties.coachInfo.bookInfo.map(item=>item.date)
				let dateList=this.data.dateList
				
				for(let i=0;i<dateList.length;i++){
					for(let p=0;p<dateList[i].time.length;p++){
						for(let k=0;k<bookInfo.length;k++){
							//若定过就删了这个时段
						dateList[i].time[p].time==bookInfo[k]?delete dateList[i].time[p].time: null
						}
					}
				}
				this.setData({
					dateList
				})
				
		},
		init() {
			var reg = new RegExp('/', "g") //匹配斜杠
			let date = new Date()
			let year, month, day, week = undefined //打包初始化
			year = date.getFullYear()
			month = date.getMonth()
			day = add0(date.getDate())
			week = date.getDay()

			let tabsTitle = []  //做头部导航列表
			for (let i = 0; i < 7; i++) {
				let fDay = {}
				let tDay = new Date(year, month, day + i)
				// 用了小程序自带的格式化工具，直接local少个0
				fDay.name = Util.formatTime(tDay).replace(reg,'-').substring(0,10)
				fDay.week = tDay.getDay()
				fDay.id = i
				fDay.time=[]
				//灌到futureDay里 
				tabsTitle.push(fDay)
			}
			//头一轮先给头部滚动组件
			this.setData({
				tabsTitle
			})

			function add0(n) {
				return (n = n < 10 ? "0" + n : n);
			}
		},
	}
})
