/**
 * 该文件是整个项目入口文件
 */

//引入Vue
import Vue from 'vue';
//引入App组件，它是所有组件的父组件
import App from './App.vue';
//引入Vuex
// 关闭生产提示
Vue.config.productionTip = false;

//引入store
import store from './store';
new Vue({
  render: h => h(App),
  store
}).$mount('#app');
// $mount('#app')中的app与index.html的容器<div id="app"></div>的id一致
