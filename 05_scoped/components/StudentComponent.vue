<template>
  <div id="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: 'StudentComponent',
  data() {
    return {};
  },
  // props: ['name', 'age', 'sex']  简单接收
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  props: {
    name: {
      type: String,
      require: true
    },
    age: {
      type: Number,
      default: 18
    },
    sex: {
      type: String,
      require: true
    }
  }
};
</script>

<style scoped>
#student {
  background-color: whitesmoke;
}
</style>
