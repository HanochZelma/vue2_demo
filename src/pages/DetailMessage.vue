<template>
  <div>
    <ul>
      <li>id：{{ id }}</li>
      <li>msg：{{ msg }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailMessage',
  props: ['id', 'msg'],
  mounted() {
    console.log(this.$route);
  }
};
</script>
<style></style>
