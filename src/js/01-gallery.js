// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((item) => {
    return `<li>
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" 
    />
  </a></li>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery li a", {
  captionDelay: 250,
  captionsData: "alt",
  showCounter: true,
  scrollbarWidth: 20
});

