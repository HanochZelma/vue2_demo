import axios from 'axios';

export default {
  name: 'export_demo',
  myAxios: function () {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/axios-server',
      params: {
        vip: 20
      },
      headers: {
        a: 100,
        b: 200
      },
      data: {
        username: 'hanoch',
        password: 123456
      }
    }).then(value => {
      console.log(value.data);
    });
  }
};
