<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">ShowDOM</button>
    <SchoolComponent></SchoolComponent>
  </div>
</template>

<script>
import SchoolComponent from './components/SchoolComponent.vue';
export default {
  name: 'App',
  components: { SchoolComponent },
  data() {
    return {
      msg: 'Vue学习'
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);
    }
  }
};
</script>

<style>
#app {
  background-color: lightblue;
}
</style>
