<template>
  <ul class="todoList">
    <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    <!-- <hr /> -->
  </ul>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: ['todos']
};
</script>
<style scoped>
.todoList {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todoListEmpty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
