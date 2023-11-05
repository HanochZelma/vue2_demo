<template>
  <!-- id='app'与style相关 -->
  <div id="app">
    <BannerComponent />
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from './components/BannerComponent.vue';
export default {
  // name: 'App'暴露的组件ID，与文件App.Vue一致
  name: 'App',
  components: { BannerComponent }
};
</script>

<style></style>
