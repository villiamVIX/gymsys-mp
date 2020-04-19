// pages/home/childCpn/homeSwiper/HomeSwiper.js
Component({
	properties:{
		swipers:{
			type:Array,
			value:[],
		}
	},
	data:{
		currentIndex:0
	},
	methods:{
		
	  swiperChange(e) {
	      this.setData({
	        currentIndex: e.detail.current
	      });
	    },
	}
})
