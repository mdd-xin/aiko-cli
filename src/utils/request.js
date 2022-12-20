import axios from 'axios' // 引入axios
// import { Message } from 'element-ui'
// import store from '@/store'
// import { MessageBox } from 'element-ui'
// import router from "@/router/index"

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 99999
})

// http request 拦截器
// service.interceptors.request.use(
// 		config => {
// 			if (window.sessionStorage.getItem('token')) {
// 				const token = store.getters['user/token'] || window.sessionStorage.getItem('token')
// 				config.headers = {
// 					'Content-Type': 'application/json',
// 					'Authorization': token
// 				}
// 			}

// 			return config
// 		},
// 		error => {
// 			Message({
// 				showClose: true,
// 				message: error,
// 				type: 'error'
// 			})
// 			return error
// 		}
// )

// // http response 拦截器
// service.interceptors.response.use(
// 		response => {
// 			// 判断是否有token
// 			// if (response.headers['new-token']) {
// 			// 	store.commit('user/setToken', response.headers['new-token'])
// 			// }
// 			if (response.data.code === 1 || response.headers.success === 'true') {
// 				return response.data
// 			}else {
// 				// 报错的话 LoginOut退出
// 				if (response.data.data && response.data.data.reload) {
// 					store.dispatch('user/LoginOut').then(()=>{})
// 				}
// 				return response.data.msg ? response.data : response
// 			}
// 		},
// 		error => {
// 			const { status } = error.response;
// 			switch (status) {
// 				case 403:
// 					MessageBox.alert(`认证登录有误，将跳转到登录页面进行登录`, "身份认证失败", {
// 						confirmButtonText: '确定',
// 					}).then(async () => {
// 						window.sessionStorage.removeItem("token");
// 						window.sessionStorage.removeItem("adminname");
// 						await store.dispatch('user/LoginOut')
// 						router.push("/login")
// 					})
// 					break;
// 				default:
// 					MessageBox.confirm(`检测到接口错误${error},此类错误内容常见于后台panic，如果影响您正常使用可强制登出清理缓存`, '接口报错', {
// 						distinguishCancelAndClose: true,
// 						confirmButtonText: '清理缓存',
// 						cancelButtonText: '取消'
// 					}).then(async () => {
// 						await store.dispatch('user/LoginOut')
// 					})
// 			}
// 			return error
// 		}
// )

export default service

