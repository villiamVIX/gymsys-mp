Component({
  /**
   * 组件的属性列表
   */
  properties: {
	  coachInfo:{type:Object}
  },
  options: {
  addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
	  baseUrl:getApp().globalData.baseUrl
  },
  lifetimes:{
  	
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
