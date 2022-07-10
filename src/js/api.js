import axios from 'axios';
const BASE_URL = 'https://62c9b6684795d2d81f80c33a.mockapi.io/api/v1/users';
let p = 1;
export const api = () => {
  const searchParams = new URLSearchParams({
    p,
    l: 6,
  });
  p++;
  try {
    const axiosa = axios(`${BASE_URL}?${searchParams}`);
    return axiosa;
  } catch (error) {
    throw new Error(error);
  }
};
export const post = name => {
  axios({
    method: 'post',
    url: `${BASE_URL}`,
    data: {
      name: name,
    },
  });
};
