import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 准备actions——用于响应组件的工作
const actions = {
  add(context, value) {
    console.log('add');
    context.commit('ADD', value);
  },
  decrease(context, value) {
    context.commit('DECREASE', value);
  }
};
// 准备mutations——用于操作数据
const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  DECREASE(state, value) {
    state.sum -= value;
  }
};
// 准备state——用于存储数据
const state = {
  sum: 0
};
const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
};
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
