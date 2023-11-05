<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CategoryComponent',
  props: ['title', 'listData']
};
</script>
<style>
.category {
  width: 200px;
  height: 300px;
  background-color: whitesmoke;
}
h3 {
  text-align: center;
  background-color: aquamarine;
}
</style>
