// pages/train/lesson/Lesson.js
import {
	getLesson
}from '../../../network/NetTrain.js'

Component({
	properties:{
	 Lesson:{
		 type:Array,
		 value:[]
	 }
	},
  data: {
	 weekList: ["一", "二", "三", "四", "五", "六", "天"],
  },
  // onLoad: function (options) {
	 //  this._getLesson()
  // },
  // _getLesson(){
	 //  getLesson().then(res=>{
		//   console.log(res.data)
		//   const Lesson=res.data
		//   this.setData({
		// 	  Lesson
		//   })
	 //  })
  // },
 
})