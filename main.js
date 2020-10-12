import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(iView);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});

// // 设置请求拦截
// axios.interceptors.request.use(function(config){
// 	let url=config.url;
//     if(url==='/reset/login'){
// 		// 登录页面，只是返回token值，不能验证token。  所以每次登录时都要获取最新的token
// 		localStorage.setItem('token','');
// 		// 设置到头部去
// 		config.headers.Authorization='';
// 	}else{
// 		config.headers.Authorization=localStorage.getItem('token');
// 	}
// 	return	 config;
// },function(err){
//   return Promise.reject(err);
// });

// // 设置响应拦截

// axios.interceptors.response.use(function(res){
//   if(res.data.data===401){
//     alert(res.data.msg)
	//  iView.Message.warning(res.data.msg)
	// localStorage.removeItem('token')
	// router.push({
	// 	name:'login'
	// })
//   }
//   if(res.data.data===500){
// 	alert(res.data.msg)
//   }
//   return res;
// },function(err){
//   return err;
// })


/*****
 * 如果设置权限是headers.Authorization='';形式。
 * 我们可以再data定义： headers:{Authorization:''},然后再获取到值赋值给headers.Authorization
 */