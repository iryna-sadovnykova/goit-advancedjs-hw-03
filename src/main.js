import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPictures } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const loader = document.querySelector('.loader');
const button = document.querySelector('button');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!gallery) return;
  const query = searchInput.value;
  searchInput.value = '';

  if (query) {
    clearGallery(gallery);
    loader.classList.remove('hidden');
    button.setAttribute('disabled', 'disabled');

    getPictures(query).then(res => {
      button.removeAttribute('disabled');

      loader.classList.add('hidden');
      if (!res.hits.length) {
        return iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      }
      renderGallery(gallery, res.hits);
    });
  }
});
