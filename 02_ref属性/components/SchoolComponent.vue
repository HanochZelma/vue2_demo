<template>
  <div id="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SchoolComponent',
  data() {
    return {
      name: 'ECUST',
      address: '上海'
    };
  }
};
</script>

<style>
#school {
  background-color: whitesmoke;
}
</style>
