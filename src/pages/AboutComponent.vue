<template>
  <div>
    <h2>我是About的内容</h2>
    <button @click="sendMsg">send msg to axios</button>
  </div>
</template>
<script>
// import axios from 'axios';
import myAxios from '../js/myAxios';
export default {
  name: 'AboutComponent',
  methods: {
    sendMsg() {
      myAxios.myAxios();
      console.log(myAxios);
      // myAxios();
      // axios({
      //   method: 'POST',
      //   url: 'http://127.0.0.1:8000/axios-server',
      //   params: {
      //     vip: 20
      //   },
      //   headers: {
      //     a: 100,
      //     b: 200
      //   },
      //   data: {
      //     username: 'hanoch',
      //     password: 123456
      //   }
      // }).then(value => {
      //   console.log(value.data);
      // });
    }
  }
};
</script>
<style></style>
