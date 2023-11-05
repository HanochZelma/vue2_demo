import VueRouter from 'vue-router';
import AboutComponent from '../pages/AboutComponent.vue';
import DetailMessage from '../pages/DetailMessage.vue';
import HomeComponent from '../pages/HomeComponent.vue';
import MessagesComponent from '../pages/MessagesComponent.vue';
import NewsComponent from '../pages/NewsComponent.vue';
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/home',
      component: HomeComponent,
      children: [
        {
          path: 'news',
          component: NewsComponent
        },
        {
          path: 'messages',
          component: MessagesComponent,
          children: [
            {
              name: 'detailMsg',
              path: 'detail',
              component: DetailMessage,
              props($route) {
                return {
                  id: $route.query.id,
                  msg: $route.query.msg
                };
              }
            }
          ]
        }
      ]
    }
  ]
});
