<template>
  <!-- id='app'与style相关 -->
  <div id="app">
    <CountComponent />
  </div>
</template>

<script>
import CountComponent from './components/CountComponent';
export default {
  // name: 'App'暴露的组件ID，与文件App.Vue一致
  name: 'App',
  components: { CountComponent },
  mounted() {
    console.log('app', this);
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}
</style>
