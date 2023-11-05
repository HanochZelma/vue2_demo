<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和*10为：{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">加法</button>
    <button @click="decrement(n)">减法</button>
    <button @click="incrementOdd">奇数不加</button>
    <button @click="incrementWait">等会再加</button>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'CountComponent',
  data() {
    return {
      n: 1
    };
  },
  computed: {
    ...mapState(['sum']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapActions({ increment: 'add', decrement: 'decrease' }),
    // ...mapMutations({ increment: 'ADD', decrement: 'DECREASE' }),
    // increment() {
    //   this.$store.dispatch('add', this.n);
    // },
    // decrement() {
    //   this.$store.dispatch('decrease', this.n);
    // },
    incrementOdd() {},
    incrementWait() {}
  }
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
