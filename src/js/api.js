import axios from 'axios';
const BASE_URL = 'http://localhost:1232';
export const api = () =>
  axios(`${BASE_URL}/posts`).then(res => console.log(res));
export const post = () => {
  axios({
    method: 'post',
    url: 'http://localhost:1232/posts',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone',
    },
  });
};
