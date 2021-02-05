import axios from 'axios'
import router from '@/router'
import Vue from 'vue'

let NODE_ENV = process.env.NODE_ENV
if(NODE_ENV === 'development'){
	//开发环境
	axios.defaults.baseURL = 'http://localhost:8081'; //初始地址
}
if(NODE_ENV === 'production'){
	//生产环境
	axios.defaults.baseURL = ''; //初始地址
}

axios.defaults.timeout = 5000

axios.interceptors.request.use(
	request=>{
		request.headers['X-EOS-SourceSysKey'] = Vue.config['X-EOS-SourceSysKey']

		if(localStorage.getItem('Token')){
			request.headers['Authorization'] =  localStorage.getItem('Token')
		}
		if(!localStorage.getItem('Token') && router.currentRoute.fullPath !== '/login'){
			router.replace('/login').then(()=>request)
		}
	return request
},
	error=>

			Promise.reject(error)

)


axios.interceptors.response.use(
	response=>{
		return response
	},
	error=> {
		router.replace('/login')
		return Promise.reject (error)
	}
)
export default axios
