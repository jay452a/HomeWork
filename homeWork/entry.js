import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
let echarts = require('echarts');


/*以下为页面组件*/
import login from "./components/login.vue";
import list from "./components/list.vue";
import home from "./components/list/home.vue";
import dashBoards from "./components/list/dashBoards.vue";
import './src/style/public.less';
import  axios from "axios";
Vue.config.debug = true;//开启错误提示

Vue.use(VueRouter)
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts

const router = new VueRouter({
    routes: [
	    {
	    	path: '/',
	    	component: login,
	    	children:[]
	    },
        {
            path: '/list',
            component: list,
            children:[
				 { path: '/list', component: home},
				 { path: '/list/home', component: home},
				 { path: '/list/dashBoards', component: dashBoards},

            ]
        }
    ]
});

const vm=new Vue({
	el:"#app",
	router: router,
});

