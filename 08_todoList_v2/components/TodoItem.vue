<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo)" ref="editInput" />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" style="margin-right: 5px" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodo', id);
      // this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        // this.deleteTodo(id);
        this.$bus.$emit('deleteTodo', id);
      }
    },
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true;
      } else {
        this.$set(todo, 'isEdit', true);
      }
      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
      // todo.isEdit = true;
    },
    handleBlur(todo) {
      todo.isEdit = false;
      console.log(this.$refs.editInput.value);
      if (!this.$refs.editInput.value.trim()) return alert('不能为空！');
      this.$bus.$emit('updateTodo', todo.id, this.$refs.editInput.value);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  /* border-bottom: 1px solid #ddd; */
}
li label {
  float: left;
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
  border: 1px;
  border-radius: 2px;
  font-size: 12px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
.todo-enter,
.todo-leave-to {
  transform: translateX(100%);
}
.todo-enter-to,
.todo-leave {
  transform: translateX(0);
}
.todo-enter-active,
.todo-leave-active {
  transition: 0.3s linear;
}
</style>
