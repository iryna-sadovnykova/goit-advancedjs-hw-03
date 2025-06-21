import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

function getParams(query) {
  const params = new URLSearchParams({
    key: '50351330-2fc0fc2b1e2442bcaa307ce6b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return '?' + params.toString();
}

export function getPictures(query) {
  const url = BASE_URL + getParams(query);
  return axios(url)
    .then(response => response.data)
    .catch(error => console.error(error));
}
