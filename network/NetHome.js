import request from './network.js'

export function getHomeCommon() {
  return request({
    url: '/gymdata/home/common'
  })
}

export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}
export function getNewsList(data){// 请新闻列表
	return request({
		url:'/news/newslist',
		data:{
			page:data.page,
			pageSize:data.pageSize
		}
	})
}