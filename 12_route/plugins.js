import Vue from 'vue';
export default {
  install() {
    Vue.mixin({
      data() {
        return {
          x: 200,
          y: 100
        };
      },
      methods: {
        helloVue() {
          console.log('helloVue');
        },
        helloEcust() {
          console.log('helloEcust');
        }
      }
      // watch: {},
      // computed: {},
      // mounted() {}
    });
  }
};
