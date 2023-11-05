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
        }
      }
      // watch: {},
      // computed: {},
      // mounted() {}
    });
  }
};
