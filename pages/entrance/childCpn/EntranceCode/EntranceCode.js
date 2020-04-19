// pages/entrance/childCpn/EntranceCode/EntranceCode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
	  baseUrl:getApp().globalData.baseUrl
  },
  lifetimes:{
  	attached(){
		console.log(this.data.baseUrl)
	},
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
