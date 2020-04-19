// pages/home/childCpn/homeGrid/HomeGrid.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},
	options: {
		addGlobalClass: true,
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		'grids': [{
				'image': 'coach',
				'title': '私教',
				'route': '/train/coach',
				'color': 'color1'
			},
			{
				'image': 'lesson',
				'title': '团课',
				'route': '/train/lesson',
				'color': 'color2'
			},
			{
				'image': 'data',
				'title': '身体数据',
				'route': '/train/data',
				'color': 'color3'
			},
			{
				'image': 'news',
				'title': '健康资讯',
				'route': '/newslist',
				'color': 'color4'
			}
		]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		
	}
})
