// pages/shop/components/categoryBar.js
Component({
	properties: {
		// 当前切换到的分类
		current: {
			type: Number,
			value: 0
		},
		// 是否需要滚动，为 false 时使用 justify:space-around 布局
		scroll: {
			type: Boolean,
			value: false
		},
		tabsTitle:{
			type: Array,
			observer:function(a,b){
				this.refreshData(a)
				// console.log(a,b)
			}
		},
	},
	data:{
		tabs:[]
	},

	methods: {
		refreshData(data){
			// console.log(data)
			this.setData({
				tabs:data
			})
		},
		handleTap(e) {
			const {
				index,
				date
			} = e.currentTarget.dataset;
			if (index === this.data.current) return;
			this.setData({
				current: index
			});
			this.triggerEvent("change", {
				current: index,
				date
			});
		}
	}
});
