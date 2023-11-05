<template>
  <!-- id='app'与style相关 -->
  <div id="app">
    <CategoryComponent title="美食" :listData="foods" />
    <CategoryComponent title="游戏" :listData="games" />
    <CategoryComponent title="电影" :listData="films" />
  </div>
</template>

<script>
import CategoryComponent from './components/CategoryComponent.vue';
export default {
  // name: 'App'暴露的组件ID，与文件App.Vue一致
  name: 'App',
  components: { CategoryComponent },
  data() {
    return {
      foods: ['面条', '拌粉', '炒饭', '炒菜'],
      games: ['Apex', 'CSGO', 'DNF', 'QQ'],
      films: ['钢铁侠', '复仇者联盟', '蝙蝠侠', '蜘蛛侠']
    };
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}
</style>
