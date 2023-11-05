<template>
  <div>
    <ul v-for="m in messageList" :key="m.id">
      <li>
        <router-link
          :to="{
            name: 'detailMsg',
            query: {
              id: m.id,
              msg: m.msg
            }
          }"
          >{{ m.msg }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'MessagesComponent',
  data() {
    return {
      messageList: [
        { id: '001', msg: '消息001' },
        { id: '002', msg: '消息002' },
        { id: '003', msg: '消息003' }
      ]
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'detailMsg',
        query: {
          id: m.id,
          msg: m.msg
        }
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'detailMsg',
        query: {
          id: m.id,
          msg: m.msg
        }
      });
    }
  }
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
