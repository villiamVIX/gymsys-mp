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
		}
	},

	data: {
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

	methods: {
		handleTap(e) {
			const {
				index
			} = e.currentTarget.dataset;
			if (index === this.data.current) return;
			this.setData({
				current: index
			});
			this.triggerEvent("change", {
				current: index,
			});
		}
	}
});
