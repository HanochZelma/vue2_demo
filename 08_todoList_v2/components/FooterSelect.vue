<template>
  <div class="footerSelect" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>

    <span>已完成{{ doneTotal }} / 全部{{ total }}</span>

    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: 'FooterSelect',
  props: ['todos', 'checkAllTodo', 'deleteTodo', 'clearAllTodo'],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // return this.todos.reduce((pre, todo) => {
      //   return pre + (todo.done ? 1 : 0);
      // }, 0);
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.doneTotal == this.total && this.total > 0 ? true : false;
      },
      set(value) {
        this.checkAllTodo(value);
      }
    }
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    clearDone() {
      this.clearAllTodo();
    }
  }
};
</script>
<style scoped>
.footerSelect {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.footerSelect label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.footerSelect label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.footerSelect button {
  float: right;
  margin-top: 5px;
}
</style>
