import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderGalleryItem({
  src,
  originalSrc,
  description,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${originalSrc}">
                <img
                    class="gallery-image"
                    src="${src}"
                    data-source="${originalSrc}"
                    alt="${description}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${likes}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${views}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${comments}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>`;
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function renderGallery(gallery, images) {
  if (gallery) {
    const galleryHTML = images
      .map(
        ({
          webformatURL: src,
          largeImageURL: originalSrc,
          tags: description,
          likes,
          views,
          comments,
          downloads,
        }) =>
          renderGalleryItem({
            src,
            originalSrc,
            description,
            likes,
            views,
            comments,
            downloads,
          })
      )
      .join('');

    gallery.innerHTML = galleryHTML;

    const lightBoxInstance = new SimpleLightbox('.gallery a');

    lightBoxInstance.refresh();
  }
}
