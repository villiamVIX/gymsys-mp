import request from './network.js'

export function getLogin(code){// 登录
	return request({
		url:'/users/mp/login',
		method:'post',
		data:{
			code
		}
	})
}


export function isLogin(){// 自动登录
	return request({
		url:'/users/api/islogin'
	})
}
