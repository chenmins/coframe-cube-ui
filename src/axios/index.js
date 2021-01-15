import axios from 'axios'
import router from '@/router'



axios.defaults.baseURL = '/api';

/*

 /users/cof-user-sysadmin/modify-password

*/

axios.interceptors.request.use(
	request=>{
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
		return Promise.reject (error)
	}
)
export default axios
