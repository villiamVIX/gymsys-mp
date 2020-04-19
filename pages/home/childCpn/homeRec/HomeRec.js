// pages/home/childCpn/homeRec/HomeRec.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	  recommend:{
		  type:Object,
		  value:{}
	  }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
		  getUser(){
		  	wx.getUserInfo({
		  	  success: function (res) {
		  	    console.log(res)
		  	  }
		  	})
	  }
  }
})
