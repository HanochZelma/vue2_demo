<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="ageAdd">年龄 + 1</button>
    <StudentComponent :name="name" :age="age" :sex="sex"></StudentComponent>
  </div>
</template>

<script>
import StudentComponent from './components/StudentComponent.vue';
export default {
  name: 'App',
  components: { StudentComponent },
  data() {
    return {
      msg: '学生信息',
      name: 'hanoch',
      age: 26,
      sex: '男'
    };
  },
  methods: {
    ageAdd() {
      this.age += 1;
    }
  }
};
</script>

<style>
#app {
  background-color: lightblue;
}
</style>
